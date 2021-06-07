import React from 'react'

const NavbarRightControl = (props: any) => {
  return (
    <div className={"relative flex flex-row items-center justify-end w-1/3 h-16 mr-4"}>
      {props.children}
    </div>
  )
}

export default NavbarRightControl
