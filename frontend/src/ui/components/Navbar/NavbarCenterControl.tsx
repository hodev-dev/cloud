import React from 'react'

const NavbarCenterControl = (props: any) => {
  return (
    <div className={"flex flex-col items-center justify-center w-2/3 h-16"}>
      {props.children}
    </div>
  )
}

export default NavbarCenterControl
