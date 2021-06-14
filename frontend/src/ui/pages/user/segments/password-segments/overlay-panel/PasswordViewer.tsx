import React from 'react'
import { FiClock, FiCopy, FiGitBranch, FiPaperclip, FiRefreshCcw, FiUnlock } from 'react-icons/fi'
import FlatButton from '../../../../../components/button/FlatButton'

const PasswordViewer = (props: any) => {
  return (
    <div className={"w-full text-sm"}>
      <div className={"relative flex flex-col items-center justify-center overflow-hidden bg-gray-200 hover:overflow-y-auto"}>
        <div className={"flex flex-row items-center justify-center w-full h-24 text-sm text-white bg-blue-700 border border-t-0"}>
          <FlatButton color={"text-green-600 "} icon={FiUnlock} />
          <h2 className={"ml-4"}>Please Unlock To Make Change</h2>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Name"} />
          <div className={"flex flex-row justify-start w-2/12 h-9"}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"UserName"} />
          <div className={"flex flex-row justify-start w-2/12 h-9 "}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="password" placeholder={"passwords"} />
          <div className={"flex flex-row justify-start w-2/12 h-9 "}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
            <FlatButton icon={FiRefreshCcw} size={"w-9 h-9"} onClick={() => props.setShowPasswordGenerator((prevState: boolean) => !prevState)} />
            <FlatButton icon={FiGitBranch} size={"w-9 h-9"} />
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="number" placeholder={"TOTP"} />
          <div className={"flex flex-row justify-start w-2/12 h-9 "}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
            <FlatButton icon={FiRefreshCcw} size={"w-9 h-9"} />
            <FlatButton icon={FiClock} size={"w-9 h-9"} />
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Website"} />
          <div className={"flex flex-row justify-start w-2/12 h-9 "}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Color"} />
          <div className={"flex flex-row justify-start w-2/12 h-9 "}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
          </div>
        </div>
        <div className={"flex items-center justify-center w-full h-12 p-2 bg-white border border-t-0 border-l-0 border-r-0"}>
          <input disabled autoFocus className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Attach file"} />
          <div className={"flex flex-row justify-start w-2/12 h-9 "}>
            <FlatButton noGap icon={FiCopy} size={"w-9 h-9"} />
            <FlatButton icon={FiPaperclip} size={"w-9 h-9"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordViewer
