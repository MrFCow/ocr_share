import React, {useState, useRef, useCallback} from 'react';
import Webcam from "react-webcam";

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
		display:"flex",
		flexDirection: "column",
		justifyContent:"center",
		alignItems:"center"
	},
	button: {
		marginTop:5,
	}
})

const videoConstraints = {
  width: 320,
  height: 320,
  facingMode: "environment" // or "user" = front
};

export default function WebCamWithChildren(props){
	const classes = useStyles();

	const [img, setImg] = useState(null);
	const webcamRef = useRef(null);
	
  const capture = useCallback(
    () => {
			const imageSrc = webcamRef.current.getScreenshot();
			// console.log(imageSrc)
			setImg(imageSrc);
    },
    [webcamRef]
  );

  return (
    <div className={classes.root}>
			{!img? (
				<Webcam
					audio={false}
					height={320}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					width={320}
					videoConstraints={videoConstraints}
				/>
			) : (
				// <img src={img}/>
				<div style={{width:320, height:320, background:`url(${img})`}}>
					{React.cloneElement(props.children, { img: img })}
				</div>
			)}
			<span>
      	<button className={classes.button} onClick={capture}>Capture photo</button>
				<button className={classes.button} onClick={()=>setImg(null)}>Clear</button>
			</span>
    </div>
  );
};