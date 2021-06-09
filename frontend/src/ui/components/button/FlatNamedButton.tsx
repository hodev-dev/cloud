import React, { useState } from 'react';

const FlatNamedButton = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div key={props.key} onClick={props.onClick} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`flex flex-row items-center w-full h-16 ${(props.border || isHover) ? 'border-b-2' : ''} ${(props.selected) ? props.selectBg : "bg-gray-50"} hover:${props.selectBg} select-none cursor-pointer hover:bg-gray-100 hover: ${(props.selected) ? props.selectBorder + ' ' + "border-b-2" : ""} hover:${props.selectBorder} hover:border-b-2`}>
      <div className={"flex items-center justify-center w-12 h-12 ml-4 text-center bg-white border border-gray-200 rounded-md outline-none"}>
        <props.icon size={24} className={props.iconColor} />
      </div>
      <span className={`ml-5 text-base font-medium ${props.iconColor}`}>{props.name}</span>
    </div>
  )
}

export default FlatNamedButton
