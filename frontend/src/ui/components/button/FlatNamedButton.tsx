import React from 'react'

const FlatNamedButton = (props: any) => {
  return (
    <div className={`flex flex-row items-center w-full h-16 ${(props.border) ? 'border-b-2' : ''} bg-gray-50`}>
      <div className={`flex  items-center justify-center w-12 h-12 ml-4 text-center bg-white border border-gray-200 rounded-md outline-none`}>
        <props.icon size={24} className={"text-gray-500"} />
      </div>
      <span className={"ml-5 text-base font-medium text-gray-500"}>{props.name}</span>
    </div>
  )
}

export default FlatNamedButton
