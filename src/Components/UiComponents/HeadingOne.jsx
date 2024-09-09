import React from 'react';
import { useSpring, animated, useTransition, config, useInView } from "react-spring";


const HeadingOne = (props) => {

  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });
  const textAnimation = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
    config: config.default,
  });

  

  return (
    <div className=''>
          <animated.div className="text" ref={textRef} style={textAnimation}>

        <div className='pl-10 text-left'>
            <h2 className=' font-bold font-cinzel text-lg sm:text-2xl pt-8 pb-2  '> {props.headText} </h2>
            <hr className="w-48 h-1  bg-[#FFDE59] border-0 rounded " />

        </div>
        </animated.div>

    </div>
  )
}

export default HeadingOne