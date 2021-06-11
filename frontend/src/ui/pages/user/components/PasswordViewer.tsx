import React from 'react'
import { FiClock, FiCopy, FiGitBranch, FiPaperclip, FiRefreshCcw } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'

const PasswordViewer = (props: any) => {
  return (
    <div className={"w-full"}>
      <div className={"relative flex flex-col items-center justify-center overflow-hidden hover:overflow-y-auto"}>
        <div className={"flex flex-row items-center justify-center w-full font-mono text-base border border-t-0 text-coolGray-500 bg-coolGray-100 h-14"}>Please Unlock To Make Change </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Name"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"UserName"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="password" placeholder={"passwords"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
            <FlatButton icon={FiRefreshCcw} onClick={() => props.setShowPasswordGenerator((prevState: boolean) => !prevState)} />
            <FlatButton icon={FiGitBranch} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="number" placeholder={"TOTP"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
            <FlatButton icon={FiRefreshCcw} />
            <FlatButton icon={FiClock} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Website"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Color"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
          </div>
        </div>
        <div className={"flex flex-wrap items-center justify-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input disabled autoFocus className={"w-6/12 h-12 p-2 ml-40 text-center border rounded-l-sm outline-none disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Attach file"} />
          <div className={"flex flex-row justify-start w-2/12 "}>
            <FlatButton noGap icon={FiCopy} />
            <FlatButton icon={FiPaperclip} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordViewer
