import React from 'react';

const FlatButton = (props: any) => {
   return (
      <div
         onClick={props.onClick}
         className={`border flex  items-center justify-center ${props.size ? props.size : 'h-10 w-10'} ${
            props.noGap ? '' : 'mr-4'
         } text-center bg-black  border-warmGray-800 rounded-md outline-none cursor-pointer select-none hover:bg-warmGray-900 hover:border-gray-800  ${props.selected ? '' : ''}`}
      >
         <props.icon size={16} className={`${props.color ? props.color : 'text-warmGray-300'}`} />
      </div>
   );
};

export default FlatButton;
