import React from 'react'

function NavbarLeftControl(props: any) {
  return (
    <div className={"relative flex flex-row items-center justify-start w-1/3 h-14"}>
      {props.children}
    </div>
  )
}

export default NavbarLeftControl
