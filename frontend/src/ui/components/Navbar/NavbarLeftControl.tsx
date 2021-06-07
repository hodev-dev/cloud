import React from 'react'

function NavbarLeftControl(props: any) {
  return (
    <div className={"flex flex-row items-center justify-start w-1/3 h-16"}>
      {props.children}
    </div>
  )
}

export default NavbarLeftControl
