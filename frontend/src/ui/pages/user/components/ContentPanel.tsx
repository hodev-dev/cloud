import React from 'react'
import { FiArrowDownCircle, FiBell, FiBookOpen, FiGrid, FiLock, FiLogOut, FiMenu, FiPlus, FiSettings, FiUser } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'
import FlatNamedButton from '../../../components/button/FlatNamedButton'
import Dropdown from '../../../components/dropdown/Dropdown'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../components/Navbar/NavbarRightControl'

function ContentPanel() {
  return (
    <div className={"flex flex-col w-8/12 h-screen"}>
      <Navbar>
        <NavbarLeftControl>
          <FlatButton icon={FiPlus} />
          <FlatButton icon={FiGrid} />
          <FlatButton icon={FiMenu} />
        </NavbarLeftControl>
        <NavbarCenterControl>
          <input className={"flex items-center justify-center w-11/12 h-12 text-center bg-white border border-gray-200 rounded-md outline-none"} placeholder="Search" />
        </NavbarCenterControl>
        <NavbarRightControl>
          <FlatButton icon={FiBell} />
          <FlatButton icon={FiSettings} />
          <Dropdown icon={FiArrowDownCircle}>
            <FlatNamedButton icon={FiUser} name="Profile" border />
            <FlatNamedButton icon={FiBookOpen} name="Documentation" border />
            <FlatNamedButton icon={FiLock} name="Lock" border />
            <FlatNamedButton icon={FiLogOut} name="Log Out" />
          </Dropdown>
        </NavbarRightControl>
      </Navbar>
      <div className={"flex flex-row flex-wrap w-full h-full bg-gray-50"}>
        <div className={"flex flex-row items-center justify-center w-64 h-32 mt-4 ml-4 text-4xl text-white bg-red-500 rounded-md"}>Youtube</div>
        <div className={"flex flex-row items-center justify-center w-64 h-32 mt-4 ml-4 text-4xl text-white bg-blue-500 rounded-md"}>Facebook</div>
      </div>
    </div>
  )
}

export default ContentPanel
