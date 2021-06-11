import React from 'react'

const CardView = (props: any) => {
  return (
    <div className={`flex flex-row items-center justify-center w-full h-32 text-2xl font-medium ${props.textColor} ${props.bg} border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm`}>{props.name}</div>
  )
}

export default CardView
