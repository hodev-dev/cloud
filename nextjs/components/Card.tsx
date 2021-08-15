import { animated, config, useSpring } from '@react-spring/web';
import React, { MutableRefObject, useRef } from 'react';
import { FaBan } from 'react-icons/fa';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';
import { useDrag } from 'react-use-gesture';

const Card = ({ image, color, threshold }) => {
   const bodyRef = useRef(null) as MutableRefObject<HTMLDivElement>;
   const [{ topY, topDisplay }, setTop] = useSpring(() => ({ topY: 0, opacityTop: 0, topDisplay: 'flex', config: config.stiff }));
   const [{ bottomY, bottomDisplay }, setBottom] = useSpring(() => ({ bottomY: 0, opacityBottom: 1, bottomDisplay: 'flex', config: config.stiff }));
   const [{ height }, setBody] = useSpring(() => ({ height: 0, clamp: false, config: config.stiff }));

   const bindTop = useDrag(({ down, movement: [mx, my], intentional }) => {
      setTop.start({
         topY: handleSpringTopToBottom(down, my),
         onChange: () => {
            setBody.start({ height: -handleSpringTopToBottom(down, my) + 32 });
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

   const bindBottom = useDrag(({ down, movement: [mx, my], direction: [dx, dy], locked }) => {
      setBottom.start({
         bottomY: handleSpringBottomToTop(down, my, dy, locked),
         onProps: () => {
            console.log('on props');
            setTop.start({ topY: -bodyRef.current.offsetHeight + 32, topDisplay: 'none' });
         },
         onChange: () => {
            console.log('on change');
            setBody.start({ height: -handleSpringBottomToTop(down, my, dy, locked) + 32 });
         },
         onRest: {
            bottomY: () => {
               console.log('on rest');
               if (bottomY.get() === -bodyRef.current.offsetHeight + 32) {
                  setTop.start({ topDisplay: 'flex' });
                  setBottom.start({ bottomDisplay: 'none', bottomY: 0 });
               }
            },
         },
      });
   });

   const handleSpringTopToBottom = (down, my) => {
      if (down) {
         if (my < bodyRef.current.offsetHeight / threshold) {
            let new_my = topY.get() > -bodyRef.current.offsetHeight / threshold ? 0 : -bodyRef.current.offsetHeight + 32 + my;
            return new_my;
         } else {
            return 0;
         }
      } else {
         if (my < bodyRef.current.offsetHeight / threshold) {
            return topY.get() > -bodyRef.current.offsetHeight / threshold ? 0 : -bodyRef.current.offsetHeight + 32;
         } else {
            return 0;
         }
      }
   };

   const handleSpringBottomToTop = (down, my, dy, locked) => {
      if (down) {
         if (my > -bodyRef.current.offsetHeight + 32) {
            if (my < -bodyRef.current.offsetHeight / threshold) {
               return -bodyRef.current.offsetHeight + 32;
            } else if (my > -bodyRef.current.offsetHeight / threshold) {
               return bottomY.get() < -bodyRef.current.offsetHeight / threshold ? -bodyRef.current.offsetHeight + 32 : my;
            }
         } else {
            return -bodyRef.current.offsetHeight + 33;
         }
      } else {
         if (my < -bodyRef.current.offsetHeight / threshold) {
            return -bodyRef.current.offsetHeight + 32;
         } else {
            return bottomY.get() < -bodyRef.current.offsetHeight / threshold ? -bodyRef.current.offsetHeight + 32 : 0;
         }
      }
   };

   return (
      <div className={'flex flex-col items-center w-6/12 overflow-hidden prevent-touch '}>
         <div className={'flex flex-row justify-center w-full space-x-10'}>
            <div className={'flex flex-col w-10/12 h-auto bg-black border border-warmGray-900 '}>
               <div className={'relative flex flex-col items-center w-full overflow-hidden min-h-96 border-b-1 border-warmGray-900'} ref={bodyRef}>
                  <animated.div {...bindTop()} style={{ y: topY, display: topDisplay }} className={'absolute bottom-0 z-10 flex items-center justify-center w-full h-8 bg-black cursor-pointer select-none border-warmGray-900 border-b-1'}>
                     <div className={'self-center w-20 h-2 rounded-lg bg-warmGray-700'}></div>
                  </animated.div>
                  <img draggable={false} className={'object-cover w-full select-none min-h-96'} style={{ backgroundColor: color }} src={'http://localhost:8000' + image} />
                  <animated.div {...bindBottom()} style={{ y: bottomY, display: bottomDisplay }} className={'absolute bottom-0 z-20 flex items-center justify-center w-full h-8 mx-auto bg-black cursor-pointer select-none border-warmGray-900 '}>
                     <div className={'self-center w-20 h-2 rounded-lg bg-warmGray-700'}></div>
                  </animated.div>
                  <animated.div style={{ height }} className={'absolute bottom-0 z-0 w-full h-auto overflow-auto bg-black min-h-6 scrollbar-track-black scrollbar-thin scrollbar-thumb-warmGray-800'}>
                     <div className={'w-full h-screen mt-8 text-6xl text-center text-warmGray-300 '}>test</div>
                  </animated.div>
               </div>
               <div className={'z-20 flex flex-row items-center w-12 h-12 ml-5'}>
                  <img className={'object-cover rounded-full w-9 h-9'} src={'http://localhost:8000' + image} />
                  <h1 className={'ml-5 font-semibold underline text-warmGray-300'}>Ho3ein_mola</h1>
               </div>
               <div className={'flex flex-row divide-x-1 divide-warmGray-800 w-ful border-t-1 border-warmGray-900'}>
                  <div className={'flex items-center justify-center w-1/3 h-12 cursor-pointer '}>
                     <FiHeart size={24} className={'fill-current text-warmGray-300'} />
                     <span className={'ml-5 text-base text-warmGray-300'}>2k</span>
                  </div>
                  <div className={'flex items-center justify-center w-1/3 h-12 cursor-pointer '}>
                     <FiMessageCircle size={24} className={'fill-current text-warmGray-300'} />
                     <span className={'ml-5 text-base text-warmGray-300'}>2k</span>
                  </div>
                  <div className={'flex items-center justify-center w-1/3 h-12 cursor-pointer '}>
                     <FaBan size={24} className={'fill-current text-warmGray-300'} />
                     <span className={'ml-5 text-base text-warmGray-300'}>2k</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
