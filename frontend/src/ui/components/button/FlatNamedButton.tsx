import React, { useState } from 'react';

const FlatNamedButton = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  const renderShape = () => {
    if (props.shapeType === 1) {
      return (
        <div className={"flex items-center justify-center w-3 ml-4 text-center rounded-full h-9"}>
          <div className={`w-3 h-8 rounded-md  ${(props.selected) ? props.selectBorder : ""} `}></div>
        </div>
      )
    }
    else if (props.shapeType === 2) {
      return (
        <div className={"flex items-center justify-center w-3 ml-4 text-center rounded-full h-9"}>
          <div className={`w-3 h-3 rounded-full  ${(props.selected) ? props.selectBorder : ""} `}></div>
        </div>
      )
    }
    else if (props.shapeType === 3) {
      return (
        <div className={"flex items-center justify-center w-3 ml-4 text-center h-9"}>
          <div className={`w-3 h-3 transform rotate-45 ${(props.selected) ? props.selectBorder : ""} `}></div>
        </div>
      )
    }
    else if (props.shapeType === 4) {
      return (
        <div className={"flex items-center justify-center w-3 ml-4 text-center h-9"}>
          <div className={`w-3 h-3 ${(props.selected) ? props.selectBorder : ""} `}></div>
        </div>
      )
    }
    else {
      return null
    }
  }

  return (
    <button key={props.key} onClick={props.onClick} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`flex flex-row items-center w-full h-12 btn btn-white border border-t-0 border-l-0 border-r-0 outline-none   ${(props.selected === true) ? props.selectBg : "bg-white"} focus:${props.selectBg} hover:${props.selectBg} cursor-pointer `}>
      {renderShape()}
      <div className={`${(props.noIcon) ? "hidden" : "flex items-center justify-center w-10 h-10 ml-4 text-center bg-white border border-gray-200 rounded-md"}`}>
        <props.icon size={18} className={`${props.iconColor}`} />
      </div>
      <a title={props.name} className={`ml-5 text-sm  text-gray-700 `}>{props.name}</a>
    </button>
  )
}

export default FlatNamedButton
