import React from 'react'

const FlatButton = (props: any) => {
  return (
    <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`flex  items-center justify-center w-12 h-12 ${(props.noGap) ? "" : "ml-4"} text-center bg-white border-2 border-gray-200 rounded-md outline-none cursor-pointer select-none hover:bg-gray-100 hover:border-gray-500 ${(props.selected) ? 'border-2 border-gray-500 bg-gray-50' : ''}`}>
      < props.icon size={18} className={"text-gray-700"} />
    </div >
  )
}

export default FlatButton
