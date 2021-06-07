import React from 'react'
import { FiBook, FiBookmark, FiBox, FiShield, FiTrello, FiUser, FiUsers } from 'react-icons/fi'

const SidePanel = () => {
  return (
    <div className={"w-2/12 h-screen bg-gray-100 border border-t-0 border-b-0 border-l-0 border-gray-200"}>
      <div className={"flex flex-col w-full h-screen"}>
        <div className={"flex items-center w-full h-16 bg-white border border-l-0 border-r-0 border-gray-200"}>
          <div className={"flex flex-row items-center justify-start w-1/3 h-16"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
              <FiUser size={24} className={"text-gray-700"} />
            </div>
          </div>
        </div>
        <div className={"flex flex-row items-center w-full h-16 border-b-2 border-blue-700 bg-blue-50"}>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
            <FiShield size={24} className={"text-blue-700"} />
          </div>
          <span className={"ml-5 text-base font-medium text-blue-700 "}>Passwords</span>
        </div>
        <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
            <FiBox size={24} className={"text-pink-700"} />
          </div>
          <span className={"ml-5 text-base font-medium text-pink-700 "}>Files</span>
        </div>
        <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
            <FiBook size={24} className={"text-yellow-600"} />
          </div>
          <span className={"ml-5 text-base font-medium text-yellow-600 "}>Notes</span>
        </div>
        <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
            <FiBookmark size={24} className={"text-yellow-800"} />
          </div>
          <span className={"ml-5 text-base font-medium text-yellow-800"}>Bookmarks</span>
        </div>
        <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
            <FiTrello size={24} className={"text-green-800"} />
          </div>
          <span className={"ml-5 text-base font-medium text-green-800"}>Tasks</span>
        </div>
        <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
          <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
            <FiUsers size={24} className={"text-black"} />
          </div>
          <span className={"ml-5 text-base font-medium text-black"}>Contacts</span>
        </div>
      </div>
    </div>
  )
}

export default SidePanel
