import { animated, config, useSpring } from '@react-spring/web';
import React from 'react';
import { useDrag } from 'react-use-gesture';

const Test = () => {
   const [{ y }, setBottom] = useSpring(() => ({ y: 0, config: config.wobbly }));
   const bindBottom = useDrag(
      ({ down, movement: [mx, my], direction: [dx, dy], locked }) => {
         setBottom.start({
            y: my,
         });
      },
      {
         filterTaps: true,
         threshold: 50,
         axis: 'y',
      }
   );
   return (
      <animated.div {...bindBottom()} style={{ y }} className={'w-full h-32 bg-red-500 select-none'}>
         test
      </animated.div>
   );
};

export default Test;
