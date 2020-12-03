import React, {useState} from 'react';
import { useDrag } from 'react-use-gesture';
import {createUseStyles} from 'react-jss';
import { createWorker } from 'tesseract.js';

const useStyles = createUseStyles({
  root: {
		width:320,
		height:320,
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	box: {
		backgroundColor: "rgba(0,255,0,0.5)",
	}
})


const worker = createWorker({
	logger: m => console.log(m),
});

const doOCR = async (img, pos) => {
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
	console.log(`OCR text: ${text}`)
	return text;
};

export default function DragDrawBox(props){
	const classes = useStyles();
	console.log(props)

	const [pos, setPos] = useState({
		startX:0,
		startY:0,
		endX:0,
		endY:0,
	});

  const bind = useDrag(({ down, movement: [movX, movY], offset: [offX, offY], initial: [initX, initY] }) => {
		// console.log("init", initX,initY);
		// console.log("mov", movX,movY);
		// console.log("off", offX,offY);
		setPos({...pos, startX:initX, startY:initY, endX: initX+movX, endY: initY+movY});
	},
	// options
	{ 
		delay: true, // allowing click for generated div
		// bounds: { left: 0, right: 320, top: 0, bottom: 320 },
	}, 
	)

	return (
		<>
			{/* <div>{JSON.stringify(pos)}</div> */}
			<div className={classes.root} {...bind()}>
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
					onClick={() => {props.img ? doOCR(props.img, pos) : console.log("image not available")} }
				/>) : null}
			</div>
		</>
	)
}