import React from 'react';

const FlatNameSelect = (props: any) => {
   const renderShape = () => {
      if (props.shapeType === 1) {
         return (
            <div className={'flex items-center justify-center w-3 mr-5 text-center rounded-full h-9'}>
               <div className={`w-3 h-8 rounded-md  ${props.selected ? props.selectColor : ''} `}></div>
            </div>
         );
      } else if (props.shapeType === 2) {
         return (
            <div className={'flex items-center justify-center w-3 mr-5 text-center rounded-full h-9'}>
               <div className={`w-3 h-3 rounded-full  ${props.selected ? props.selectColor : ''} `}></div>
            </div>
         );
      } else if (props.shapeType === 3) {
         return (
            <div className={'flex items-center justify-center w-3 mr-5 text-center h-9'}>
               <div className={`w-3 h-3 transform rotate-45 ${props.selected ? props.selectColor : ''} `}></div>
            </div>
         );
      } else if (props.shapeType === 4) {
         return (
            <div className={'flex items-center justify-center w-3 mr-4 text-center h-9'}>
               <div className={`w-3 h-3 ${props.selected ? props.selectColor : ''} `}></div>
            </div>
         );
      } else {
         return null;
      }
   };

   return (
      <div className={'w-full '}>
         <div
            key={props.key}
            onClick={props.onClick}
            className={`flex flex-row items-center w-full h-14 border border-t-0 btn border-r-0 outline-none focus:ring-0 focus:outline-none btn btn-white   ${props.selected === true ? props.selectBg : 'bg-white'} hover:${
               props.selectBg
            } cursor-pointer `}
         >
            {renderShape()}
            <p title={props.name} className={`mr-5 text-md  text-gray-700 `}>
               {props.name}
            </p>
         </div>
      </div>
   );
};

export default FlatNameSelect;
