import React from 'react'
import FlatButton from '../button/FlatButton'

function Dropdown(props: any) {
  return (
    <>
      <FlatButton icon={props.icon} />
      <div className={"absolute w-full h-auto bg-white shadow-xl top-16"}>
        {props.children}
      </div>
    </>
  )
}

export default Dropdown
