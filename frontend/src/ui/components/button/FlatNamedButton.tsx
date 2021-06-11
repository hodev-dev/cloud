import React, { useState } from 'react';

const FlatNamedButton = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div key={props.key} onClick={props.onClick} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`border border-l-0 border-t-0 border-r-0 border-r-0 bg-white  flex flex-row items-center w-full h-16  ${(props.selected === true) ? props.selectBg : "bg-white"} hover:${props.selectBg} select-none cursor-pointer `}>
      <div className={`w-1 h-16  ${(props.selected) ? props.selectBorder : ""} `}></div>
      <div className={"flex items-center justify-center w-12 h-12 ml-4 text-center bg-white border border-gray-200 rounded-md outline-none"}>
        <props.icon size={24} className={`${props.iconColor}`} />
      </div>
      <span className={`ml-5 text-base font-medium ${props.iconColor}`}>{props.name}</span>
    </div>
  )
}

export default FlatNamedButton
