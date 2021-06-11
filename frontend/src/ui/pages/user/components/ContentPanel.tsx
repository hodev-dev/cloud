import React, { useState } from 'react'
import { FiBell, FiBookOpen, FiClock, FiExternalLink, FiGrid, FiLock, FiLogOut, FiMenu, FiMoreVertical, FiSettings, FiShield, FiUser } from 'react-icons/fi'
// @ts-ignore
import FlatButton from '../../../components/button/FlatButton'
import FlatNamedButton from '../../../components/button/FlatNamedButton'
import Dropdown from '../../../components/dropdown/Dropdown'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../components/Navbar/NavbarRightControl'
import CardView from './CardView'


function ContentPanel() {

  const [passwordViewMod, setPasswordViewMod] = useState(0);

  const renderPasswordView = () => {
    if (passwordViewMod === 0) {
      return (
        <div className={"grid w-full grid-cols-1 overflow-hidden overflow-y-hidden hover:overflow-y-scroll md:grid-cols-4 gap-x-0 gap-y-0 auto-cols-max"}>
          <CardView textColor={"text-red-500"} name={"Youtube"} bg={"bg-white"} />
          <CardView textColor={"text-blue-500"} name={"Facebook"} bg={"bg-white"} />
        </div>
      )
    } else {
      return (
        <div className={"w-full h-auto"}>
          <div className={"flex items-center w-full h-16 text-xl font-medium bg-white border border-t-0 border-l-0 border-r-0"}>
            <div className={"flex flex-row items-center w-9/12"}>
              <div className={"w-3 h-3 ml-4 bg-red-500 rounded-full"}></div>
              <span className={"ml-4 text-gray-700"}>Youtube</span>
            </div>
            <div className={"flex flex-row justify-end w-3/12 mr-4"}>
              <FlatButton icon={FiExternalLink} />
              <FlatButton icon={FiShield} />
              <FlatButton icon={FiUser} />
              <FlatButton icon={FiClock} />
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={"relative flex flex-col w-full h-screen overflow-hidden md:w-8/12 bg-coolGray-50"}>
      <Navbar desktop>
        <NavbarLeftControl>
          {/* <FlatButton onClick={() => setShowPAsswordModal(true)} icon={FiPlus} /> */}
          <FlatButton onClick={() => setPasswordViewMod(0)} selected={(passwordViewMod === 0) ? true : false} icon={FiGrid} />
          <FlatButton onClick={() => setPasswordViewMod(1)} selected={(passwordViewMod === 1) ? true : false} icon={FiMenu} />
        </NavbarLeftControl>
        <NavbarCenterControl>
          <input className={"flex items-center justify-center w-11/12 h-12 text-center text-gray-700 bg-white border border-gray-300 rounded-md outline-none "} placeholder="Search /passwords" />
        </NavbarCenterControl>
        <NavbarRightControl desktop>
          <FlatButton icon={FiBell} />
          <FlatButton icon={FiSettings} />
          <Dropdown icon={FiMoreVertical}>
            <FlatNamedButton icon={FiUser} name="Profile" border iconColor={"text-gray-700"} selectBorder={'border-gray-700'} selectBg={"bg-gray-100"} />
            <FlatNamedButton icon={FiBookOpen} name="Documentation" border iconColor={"text-gray-700"} selectBorder={'border-gray-700'} selectBg={"bg-gray-100"} />
            <FlatNamedButton icon={FiLock} name="Lock" border iconColor={"text-gray-700"} selectBorder={'border-gray-700'} selectBg={"bg-gray-100"} />
            <FlatNamedButton icon={FiLogOut} name="Log Out" iconColor={"text-gray-700"} selectBorder={'border-gray-700'} selectBg={"bg-gray-100"} />
          </Dropdown>
        </NavbarRightControl>
      </Navbar>
      {renderPasswordView()}
    </div >
  )
}

export default ContentPanel
