import React from 'react'

const FlatButton = (props: any) => {
  return (
    <div onClick={props.onClick} className={`border flex  items-center justify-center ${(props.size) ? props.size : "h-10 w-10"} ${(props.noGap) ? "" : "mr-4"} text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
      < props.icon size={16} className={`${(props.color) ? props.color : "text-gray-500"}`} />
    </div >
  )
}

export default FlatButton
