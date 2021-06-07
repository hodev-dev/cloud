import React from 'react'

const FlatButton = (props: any) => {
  return (
    <div className={"flex items-center justify-center w-12 h-12 ml-4 text-center bg-white border border-gray-200 rounded-md outline-none"}>
      <props.icon size={18} className={"text-gray-700"} />
    </div>
  )
}

export default FlatButton
