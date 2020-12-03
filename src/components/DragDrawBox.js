import React, {useState, useCallBack} from 'react';
import { useDrag } from 'react-use-gesture';
import {createUseStyles} from 'react-jss';
import { createWorker } from 'tesseract.js';

const useStyles = createUseStyles({
  root: {
		width:320,
		height:320,
		display:"flex",
		justifyContent:"center",
		alignItems:"center",		
	},
	box: {
		backgroundColor: "rgba(0,155,0,0.5)",
	},
	resultSpan:{
		marginTop: 5,
	},
})


const worker = createWorker({
	logger: m => console.log(m),
});

export default function DragDrawBox(props){
	const classes = useStyles();
	// console.log(props)

	const [pos, setPos] = useState({
		startX:0,
		startY:0,
		endX:0,
		endY:0,
	});

	const [detecting, setDetecting] = useState(false);
	const [detectedText, setDetectedText] = useState(null);

  const bind = useDrag(({ down, movement: [movX, movY], offset: [offX, offY], initial: [initX, initY] }) => {
		// console.log("init", initX,initY);
		// console.log("mov", movX,movY);
		// console.log("off", offX,offY);
		setPos({...pos, startX:initX, startY:initY, endX: initX+movX, endY: initY+movY});
		setDetectedText(null);
	},
	// options
	{ 
		delay: true, // allowing click for generated div
		// bounds: { left: 0, right: 320, top: 0, bottom: 320 },
	}, 
	)

	const doOCR = async (img, pos) => {
		setDetecting(true);
		await worker.load();
		await worker.loadLanguage('eng');
		await worker.initialize('eng');
		const { data: { text } } = await worker.recognize(img, {
			rectangle: { 
				top: Math.min(pos.startY, pos.endY), 
				left: Math.min(pos.startX, pos.endX), 
				width: Math.abs(pos.endX-pos.startX), 
				height: Math.abs(pos.endY-pos.startY) 
			}
		});
		setDetecting(false);
		console.log(`OCR text: ${text}`);
		setDetectedText(text);
		return text;
	};

	const handleClick = (e) => {
		if (props.img){
			doOCR(props.img, pos);
		}
		else {
			console.log("image not available")
		}
	}

	const handleShare = (e) => {
		(async () => {
			try {
				await navigator.share({ text: detectedText });
				console.log("Data was shared successfully");
			} catch (err) {
				console.error("Share failed:", err.message);
			}
		})();
	}

	return (
		<>
			{/* <div>{JSON.stringify(pos)}</div> */}
			<div className={classes.root} {...bind()} style={{touchAction: "none"}}>
				{(pos.startX-pos.endX)*(pos.startY-pos.endY) > 0 ? (<div 
					className={classes.box} 
					style={{
						position: "fixed",
						width: Math.abs(pos.startX - pos.endX), 
						height: Math.abs(pos.startY - pos.endY),
						left: Math.min(pos.startX, pos.endX),
						top: Math.min(pos.startY, pos.endY),
						// transform: `translate3d(${pos.startX}px, ${pos.startY}px, 0)` // not needed
					}}
					// onClick={()=>console.log("clicked")}
					onClick={handleClick}
				/>) : null}
			</div>
			{detecting ? <span className={classes.resultSpan}>Detecting...</span>
			: (detectedText ? ( 
				<>
					<span className={classes.resultSpan}>
						Detected Text: {detectedText}
						<button onClick={handleShare}>Share</button>
					</span>
				</>
			): (
				<span className={classes.resultSpan}>No Detected Text!</span>
			))}
		</>
	)
}