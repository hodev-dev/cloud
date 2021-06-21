import React from 'react'

const NamedDivider = (props: any) => {
  return (
    <div className={"flex flex-row items-center text-gray-500 bg-white border-t-0 border-r-0 text-md min-h-14"}>
      <h1 className={"mr-4"}>{props.name}</h1>
    </div>
  )
}

export default NamedDivider
