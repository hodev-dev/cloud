import React from 'react'

const CardView = (props: any) => {
  return (
    <button className={`flex  outline-none cursor-pointer flex-row items-center justify-center w-full h-24 text-xl font-semibold ${props.textColor} ${props.bg} border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm`}>
      {props.name}
    </button>
  )
}

export default CardView
