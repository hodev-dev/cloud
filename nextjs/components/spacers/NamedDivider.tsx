import React from 'react'

const NamedDivider = (props: any) => {
  return (
    <div className={"flex flex-row items-center leading-none text-gray-500 bg-white border border-t-0 border-r-0 font-shabnam text-md h-14"} dir={(props.dir) ? props.dir : "rtl"}>
      < h1 className={`ml-4 mr-4 ${(props.size) ? props.size : "text-md"} `} > {props.name}</h1 >
    </div >
  )
}

export default NamedDivider
