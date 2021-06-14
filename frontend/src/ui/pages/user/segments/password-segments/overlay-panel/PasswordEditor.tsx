import React, { useState } from 'react'
import { FiSave, FiX } from 'react-icons/fi'
import FlatButton from '../../../../../components/button/FlatButton'
import Navbar from '../../../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../../../components/Navbar/NavbarRightControl'
import PasswordGenerator from './PasswordGenerator'
import PasswordViewer from './PasswordViewer'

interface PasswordEditorInterface {
  showPasswordModal: boolean
  setShowPasswordsModal: any
}

const PasswordEditor = (props: PasswordEditorInterface) => {
  const [showPasswordGenerator, setShowPasswordGenerator] = useState(false);

  const renderPasswordGenerator = () => {
    if (showPasswordGenerator === true) {
      return (
        <PasswordGenerator showPasswordGenerator={showPasswordGenerator} setShowPasswordGenerator={setShowPasswordGenerator} />
      );
    } else {
      return (
        <div>
          <PasswordViewer showPasswordGenerator={showPasswordGenerator} setShowPasswordGenerator={setShowPasswordGenerator} />
        </div>
      )
    }
  }


  return (
    <div className={`absolute top-10 ${(props.showPasswordModal) ? "flex w-full items-center justify-center" : "hidden"} `}>
      <div className={"flex flex-col w-6/12 mt-24 overflow-hidden text-sm border shadow-2xl bg-gray-50 h-mostscreen hover:overflow-y-scroll dragHandle"}>
        <Navbar>
          <NavbarLeftControl>
            <FlatButton icon={FiSave} size={"w-9 h-9"} />
          </NavbarLeftControl>
          <NavbarCenterControl>
            <div className={"text-sm font-semibold text-gray-500 select-none"}>
              Password Editor
            </div>
          </NavbarCenterControl>
          <NavbarRightControl>
            <FlatButton icon={FiX} size={"w-9 h-9"} onClick={() => props.setShowPasswordsModal(false)} />
          </NavbarRightControl>
        </Navbar>
        {renderPasswordGenerator()}
      </div>
    </div>
  )
}

export default PasswordEditor
