import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
		width:800,
		height:600,
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	box: {
		width:80,
		height:80,
		backgroundColor: "#474"
	}
})

export default function DragBox() {
	const classes = useStyles();

  const [{x,y,scale}, set] = useSpring(() => ({ 
		x: 0,
		y: 0,
		scale: 1
	}))
  
  const bind = useDrag(({ down, movement: [movX, movY], offset: [offX, offY] }) => {
    set({
      x: down ? movX : movX,
			y: down ? movY : movY,
			scale: down ? 1.2 : 1,
      immediate: down
		})
	// })
	}, { initial: () => [x.value, y.value] })
	
  return (
		<div className={classes.root}>
			<animated.div
				{...bind()}
				className={classes.box}
				style={{transform: interpolate([x,y], (x,y) => `translate3d(${x}px, ${y}px, 0)`)}}
				// style={{...pos,transform: `translate3d(${pos.x.value}px,0px,0px)`}}
			>
				{/* <div>{JSON.stringify(pos)}</div> */}
			</animated.div>
		</div>
  )
}

