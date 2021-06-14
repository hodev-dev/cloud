import React from 'react'

function NavbarFullControl(props: any) {
  return (
    <div className={"relative flex flex-row items-center justify-start w-full h-14"}>
      {props.children}
    </div>
  )
}

export default NavbarFullControl