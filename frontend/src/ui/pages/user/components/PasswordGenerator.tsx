import React from 'react'
import { FiArrowDown, FiCheck, FiCopy } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../components/Navbar/NavbarRightControl'

const PasswordGenerator = (props: any) => {
  return (
    <div className={"relative flex flex-col items-center justify-center overflow-hidden shadow-2xl h-mostscreen -top-16 "}>
      <div className={"absolute top-0 w-full min-h-screen"}>
        <Navbar>
          <NavbarLeftControl>
            <FlatButton icon={FiCheck} />
          </NavbarLeftControl>
          <NavbarCenterControl>
            <div className={"font-semibold text-gray-700 select-none"}>
              Password Generator
          </div>
          </NavbarCenterControl>
          <NavbarRightControl>
            <FlatButton icon={FiArrowDown} onClick={() => props.setShowPasswordGenerator((prevState: boolean) => !prevState)} />
          </NavbarRightControl>
        </Navbar>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input value={"-v\]ce-5bS\[U\+\,c\R\"9LU&\'\*t\+\-6\,u5\}Dt\:HfSRf\]rm\>"} className={"w-6/12 h-12 p-2 ml-40 font-mono font-medium tracking-wider text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"UserName"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton icon={FiCopy} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 cancel bg-gray-50"}>
          <span className={"flex flex-row items-center justify-center w-6/12 h-12 p-2 ml-12 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>
            <input min="1" max="50" className={"w-10/12 h-12 p-2 ml-12 tracking-wider text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="range" placeholder={"Attach file"} />
          </span>
          <span className={"flex flex-row items-center justify-center w-12 h-12 p-2 ml-4 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>12</span>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <div className={"flex items-center justify-center w-6/12 h-12 p-2 ml-12 text-center text-gray-500 bg-white border rounded-l-sm outline-none"}>Include Numbers</div>
          <span className={"flex flex-row items-center justify-center w-12 h-12 p-2 ml-4 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>
            <input checked={true} className={"flex flex-row items-center justify-center w-4 h-4 p-2 font-mono text-center bg-white border border-gray-300 rounded-md"} type="checkbox" />
          </span>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <div className={"flex items-center justify-center w-6/12 h-12 p-2 ml-12 text-center text-gray-500 bg-white border rounded-l-sm outline-none"}>Include Symbols</div>
          <span className={"flex flex-row items-center justify-center w-12 h-12 p-2 ml-4 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>
            <input checked={true} className={"flex flex-row items-center justify-center w-4 h-4 p-2 font-mono text-center bg-white border border-gray-300 rounded-md"} type="checkbox" />
          </span>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <div className={"flex items-center justify-center w-6/12 h-12 p-2 ml-12 text-center text-gray-500 bg-white border rounded-l-sm outline-none"}>Include Lowercase Characters:</div>
          <span className={"flex flex-row items-center justify-center w-12 h-12 p-2 ml-4 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>
            <input checked={true} className={"flex flex-row items-center justify-center w-4 h-4 p-2 font-mono text-center bg-white border border-gray-300 rounded-md"} type="checkbox" />
          </span>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <div className={"flex items-center justify-center w-6/12 h-12 p-2 ml-12 text-center text-gray-500 bg-white border rounded-l-sm outline-none"}>Include Uppercase Characters:</div>
          <span className={"flex flex-row items-center justify-center w-12 h-12 p-2 ml-4 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>
            <input checked={true} className={"flex flex-row items-center justify-center w-4 h-4 p-2 font-mono text-center bg-white border border-gray-300 rounded-md"} type="checkbox" />
          </span>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <div className={"flex items-center justify-center w-6/12 h-12 p-2 ml-12 text-center text-gray-500 bg-white border rounded-l-sm outline-none"}>Exclude Similar Characters:</div>
          <span className={"flex flex-row items-center justify-center w-12 h-12 p-2 ml-4 font-mono text-center bg-white border border-gray-300 rounded-md text-md"}>
            <input checked={true} className={"flex flex-row items-center justify-center w-4 h-4 p-2 font-mono text-center bg-white border border-gray-300 rounded-md"} type="checkbox" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
