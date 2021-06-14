import React from 'react'

const NavbarCenterControl = (props: any) => {
  return (
    <div className={"relative flex flex-col items-center justify-center w-2/3 h-14 "}>
      {props.children}
    </div>
  )
}

export default NavbarCenterControl
