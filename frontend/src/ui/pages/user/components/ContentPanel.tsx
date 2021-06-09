import React, { useState } from 'react'
import { FiBell, FiBookOpen, FiClock, FiCopy, FiGitBranch, FiGrid, FiLock, FiLogOut, FiMenu, FiMoreVertical, FiPaperclip, FiPlus, FiRefreshCcw, FiSettings, FiUnlock, FiUser, FiX } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'
import FlatNamedButton from '../../../components/button/FlatNamedButton'
import Dropdown from '../../../components/dropdown/Dropdown'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../components/Navbar/NavbarRightControl'

function ContentPanel() {

  const [showPasswordModal, setShowPAsswordModal] = useState(false);

  return (
    <div className={"relative flex flex-col w-full h-screen overflow-hidden md:w-8/12 bg-gray-50"}>
      <Navbar desktop>
        <NavbarLeftControl>
          <FlatButton onClick={() => setShowPAsswordModal(true)} icon={FiPlus} />
          <FlatButton icon={FiGrid} />
          <FlatButton icon={FiMenu} />
        </NavbarLeftControl>
        <NavbarCenterControl>
          <input className={"flex items-center justify-center w-11/12 h-12 text-center text-gray-700 bg-white border border-gray-200 rounded-md outline-none"} placeholder="Search /passwords" />
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
      <div className={"grid w-full grid-cols-1 overflow-hidden overflow-y-hidden hover:overflow-y-scroll md:grid-cols-4 gap-x-0 gap-y-0 auto-cols-max"}>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-red-500 bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Youtube</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-blue-500 bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Facebook</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-black bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Github</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-black bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Github</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-black bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Github</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-black bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Github</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium text-black bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm"}>Github</div>
        <div className={"flex flex-row items-center justify-center w-full h-32 text-2xl font-medium bg-white border border-t-0 border-l-0 border-gray-200 rounded-lg shadow-sm text-cyan-500"}>Twitter</div>
        <div className={`absolute top-10 ${(showPasswordModal) ? "flex" : "hidden"} items-center justify-center  w-full`}>
          <div className={"flex flex-col w-10/12 mt-24 border shadow-2xl bg-gray-50 h-mostscreen "}>
            <Navbar>
              <NavbarLeftControl>
                <FlatButton icon={FiUnlock} />
              </NavbarLeftControl>
              <NavbarCenterControl>
                <div className={"font-semibold select-none"}>
                  Password Editor
                </div>
              </NavbarCenterControl>
              <NavbarRightControl>
                <FlatButton onClick={() => setShowPAsswordModal(false)} icon={FiX} />
              </NavbarRightControl>
            </Navbar>
            <div className={"flex flex-col items-center justify-center overflow-hidden hover:overflow-y-scroll"}>
              <div className={"flex flex-row items-center justify-center w-full font-mono text-base border border-t-0 bg-yellow-50 h-14"}>
                Please Unlock To Make Change
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="text" placeholder={"Name"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="text" placeholder={"UserName"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="password" placeholder={"passwords"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                  <FlatButton icon={FiRefreshCcw} />
                  <FlatButton icon={FiGitBranch} />
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="number" placeholder={"TOTP"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                  <FlatButton icon={FiRefreshCcw} />
                  <FlatButton icon={FiClock} />
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="text" placeholder={"Website"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="text" placeholder={"Color"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                </div>
              </div>
              <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
                <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="text" placeholder={"Attach file"} />
                <div className={"flex flex-row justify-start w-2/12 "}>
                  <FlatButton noGap icon={FiCopy} />
                  <FlatButton icon={FiPaperclip} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ContentPanel
