import React from 'react'

const NamedDivider = (props: any) => {
  return (
    <div className={"flex flex-row items-center text-sm text-gray-500 border-t-0 border-l-0 border-r-0 min-h-12 bg-gray-50"}>
      <h1 className={"ml-4"}>{props.name}</h1>
    </div>
  )
}

export default NamedDivider
