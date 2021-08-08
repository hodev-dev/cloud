import { animated, useSpring } from '@react-spring/web';
import React, { MutableRefObject, useRef } from 'react';
import { FaBan } from 'react-icons/fa';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';
import { useDrag } from 'react-use-gesture';

const Card = ({ image, color }) => {
   const bodyRef = useRef(null) as MutableRefObject<HTMLDivElement>;
   const [{ topY, topDisplay }, setTop] = useSpring(() => ({ topY: 20000, opacityTop: 0, topDisplay: 'flex' }));
   const [{ bottomY, bottomDisplay }, setBottom] = useSpring(() => ({ bottomY: 0, opacityBottom: 1, bottomDisplay: 'flex' }));
   const [{ height }, setBody] = useSpring(() => ({ height: 0, clamp: false, velocity: 20 }));

   const bindTop = useDrag(({ down, movement: [mx, my], movement }) => {
      setTop.start({
         topY: handleSpringToTop(down, my, movement),
         onChange: () => {
            setBody.start({ height: -handleSpringToTop(down, my, movement) + 32 });
         },
         onRest: {
            topY: () => {
               if (topY.get() === 0) {
                  setTop.start({ topDisplay: 'none', topY: -bodyRef.current.offsetHeight + 32 });
                  setBottom.start({ bottomDisplay: 'flex' });
               }
            },
         },
      });
   });

   const bindBottom = useDrag(({ down, movement: [mx, my], movement }) => {
      setBottom.start({
         bottomY: handleSpringToBottom(down, my, movement),
         onProps: () => {
            setTop.start({ topY: -bodyRef.current.offsetHeight + 32, topDisplay: 'none' });
         },
         onChange: () => {
            setBody.start({ height: -handleSpringToBottom(down, my, movement) + 32 });
         },
         onRest: {
            bottomY: () => {
               if (bottomY.get() === -bodyRef.current.offsetHeight + 32) {
                  setTop.start({ topDisplay: 'flex' });
                  setBottom.start({ bottomDisplay: 'none', bottomY: 0 });
               }
            },
         },
      });
   });

   const handleSpringToTop = (down, my, movement) => {
      if (down) {
         if (my < bodyRef.current.offsetHeight / 3) {
            return clamp(-bodyRef.current.offsetHeight + 32 + my, -bodyRef.current.offsetHeight + 32, 0);
         } else if (my > bodyRef.current.offsetHeight / 3) {
            return 0;
         }
      }
   };

   const handleSpringToBottom = (down, my, movement) => {
      if (down) {
         if (movement[1] < -bodyRef.current.offsetHeight / 3) {
            return -bodyRef.current.offsetHeight + 32;
         } else if (movement[1] > -bodyRef.current.offsetHeight / 3) {
            return clamp(movement[1], -bodyRef.current.offsetHeight + 32, 0);
         } else {
            return 0;
         }
      }
   };

   const clamp = (value: number, min: number, max: number) => {
      return Math.min(Math.max(value, min), max);
   };
   return (
      <div className={'flex flex-col items-center w-full overflow-hidden divide-y-2 divide-gray-100 prevent-touch'}>
         <div className={'flex flex-row w-full mt-5 space-x-10'}>
            <div className={'flex flex-col w-full h-auto bg-white border divide-y-2 divide-gray-100'}>
               <div className={'flex flex-row items-center w-12 h-12 ml-5'}>
                  <img className={'object-cover border border-black rounded-full w-9 h-9'} src={'http://localhost:8000' + image} />
                  <h1 className={'ml-5 font-semibold text-black underline'}>Ho3ein_mola</h1>
               </div>
               <div className={'relative flex flex-col items-center w-full overflow-hidden min-h-96'} ref={bodyRef}>
                  <animated.div {...bindTop()} style={{ y: topY, display: topDisplay }} className={'absolute bottom-0 z-10 flex items-center justify-center w-full h-8 bg-white border-gray-300 cursor-pointer'}>
                     <div className={'self-center w-20 h-2 mb-1 bg-gray-500 rounded-lg'}></div>
                  </animated.div>
                  <img draggable={false} className={'object-cover w-full select-none min-h-96'} style={{ backgroundColor: color }} src={'http://localhost:8000' + image} />
                  <animated.div {...bindBottom()} style={{ y: bottomY, display: bottomDisplay }} className={'absolute bottom-0 z-10 flex items-center justify-center w-full h-8 bg-white border-gray-300 cursor-pointer '}>
                     <div className={'self-center w-20 h-2 mb-1 bg-gray-500 rounded-lg'}></div>
                  </animated.div>
                  <animated.div style={{ height }} className={'absolute bottom-0 z-0 w-full bg-white'}></animated.div>
               </div>
               <div className={'flex flex-row divide-x-2 w-ful'}>
                  <div className={'flex items-center justify-center w-1/3 h-12 cursor-pointer '}>
                     <FiHeart size={24} className={'fill-current text-red'} />
                     <span className={'ml-5 text-base'}>2k</span>
                  </div>
                  <div className={'flex items-center justify-center w-1/3 h-12 cursor-pointer '}>
                     <FiMessageCircle size={24} className={'text-gray-500 fill-current'} />
                     <span className={'ml-5 text-base'}>2k</span>
                  </div>
                  <div className={'flex items-center justify-center w-1/3 h-12 cursor-pointer '}>
                     <FaBan size={24} className={'text-gray-500 fill-current'} />
                     <span className={'ml-5 text-base'}>2k</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
