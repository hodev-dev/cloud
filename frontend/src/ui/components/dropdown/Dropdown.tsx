import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../helper/useClickOutside';
import FlatButton from '../button/FlatButton';

function Dropdown(props: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickRef = useRef<any>();

  const handleCLose = () => {
    setIsOpen(false)
  }

  const handleHover = () => {
    setIsOpen(true);
  }
  useClickOutside(clickRef, handleCLose);

  const renderDropdown = () => {
    if (isOpen) {
      return (
        <div onMouseLeave={() => setIsOpen(false)} className={"absolute w-full h-auto bg-white shadow-xl top-16"}>
          {props.children}
        </div>
      )
    } else {
      return null;
    }
  }
  return (
    <>
      <FlatButton onMouseOver={handleHover} icon={props.icon} />
      {renderDropdown()}
    </>
  )
}

export default Dropdown
