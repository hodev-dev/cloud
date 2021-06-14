import React from 'react'

const FlatButton = (props: any) => {
  return (
    <button onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center ${(props.size) ? props.size : "h-10 w-10"} ${(props.noGap) ? "" : "ml-4"} text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
      < props.icon size={16} className={`${(props.color) ? props.color : "text-gray-500"}`} />
    </button >
  )
}

export default FlatButton
