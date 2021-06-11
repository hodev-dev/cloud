import React from 'react'

const FlatButton = (props: any) => {
  return (
    <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-12 h-12 ${(props.noGap) ? "" : "ml-4"} text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
      < props.icon size={18} className={"text-gray-500"} />
    </div >
  )
}

export default FlatButton
