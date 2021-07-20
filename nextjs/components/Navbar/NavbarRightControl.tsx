import React from 'react'

const NavbarRightControl = (props: any) => {
  return (
    <div className={"relative flex flex-row items-center justify-end w-1/3 ml-4 h-14"}>
      {props.children}
    </div>
  )
}

export default NavbarRightControl
