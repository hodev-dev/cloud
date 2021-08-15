import React from 'react';

const NamedDivider = (props: any) => {
   return (
      <div className={'flex flex-row items-center h-auto leading-none text-gray-300 bg-red-500 font-shabnam '} dir={props.dir ? props.dir : 'rtl'}>
         <h1 className={`mr-10 ${props.size ? props.size : 'text-2xl'} `}> {props.name}</h1>
      </div>
   );
};

export default NamedDivider;
