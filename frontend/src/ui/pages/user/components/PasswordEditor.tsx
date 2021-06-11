import React, { useState } from 'react'
import { FiSave, FiUnlock, FiX } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../components/Navbar/NavbarRightControl'
import PasswordGenerator from './PasswordGenerator'
import PasswordViewer from './PasswordViewer'

const PasswordEditor = (props: any) => {
  const [showPasswordGenerator, setShowPasswordGenerator] = useState(false);

  const renderPasswordGenerator = () => {
    if (showPasswordGenerator) {
      return (
        <PasswordGenerator showPasswordGenerator={showPasswordGenerator} setShowPasswordGenerator={setShowPasswordGenerator} />
      );
    } else {
      return (
        <PasswordViewer showPasswordGenerator={showPasswordGenerator} setShowPasswordGenerator={setShowPasswordGenerator} />
      )
    }
  }


  return (
    <div className={`absolute top-10  ${(props.showPasswordModal) ? "flex w-full items-center justify-center" : "hidden"} `}>
      <div className={"flex flex-col w-6/12 mt-24 border shadow-2xl bg-gray-50 h-mostscreen dragHandle"}>
        <Navbar>
          <NavbarLeftControl>
            <FlatButton icon={FiSave} />
            <FlatButton icon={FiUnlock} />
          </NavbarLeftControl>
          <NavbarCenterControl>
            <div className={"font-semibold text-gray-700 select-none"}>
              Password Editor
          </div>
          </NavbarCenterControl>
          <NavbarRightControl>
            <FlatButton onClick={() => props.setShowPAsswordModal(false)} icon={FiX} />
          </NavbarRightControl>
        </Navbar>
        {renderPasswordGenerator()}
      </div>
    </div>
  )
}

export default PasswordEditor
