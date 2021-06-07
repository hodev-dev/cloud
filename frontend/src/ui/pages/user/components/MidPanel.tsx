import React from 'react'
import { FiClock, FiFolderPlus, FiHeart, FiMenu, FiTrash2 } from 'react-icons/fi'

const MidPanel = () => {
  return (
    <div className={"w-2/12 h-screen bg-gray-100 border border-t-0 border-b-0 border-l-0 border-gray-200"}>
      <div className={"flex flex-col w-full h-screen"}>
        <div className={"flex items-center w-full h-16 bg-white border border-l-0 border-r-0 border-gray-200"}>
          <div className={"flex flex-row items-center justify-start w-1/3 h-16"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
              <FiFolderPlus size={18} className={"text-gray-700"} />
            </div>
          </div>
        </div>
        <div>
          <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
              <FiMenu size={24} className={"text-gray-500"} />
            </div>
            <span className={"ml-5 text-base font-medium text-gray-500"}>All</span>
          </div>
          <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
              <FiHeart size={24} className={"text-gray-500"} />
            </div>
            <span className={"ml-5 text-base font-medium text-gray-500"}>Favorite</span>
          </div>
          <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
              <FiClock size={24} className={"text-gray-500"} />
            </div>
            <span className={"ml-5 text-base font-medium text-gray-500"}>Recent</span>
          </div>
          <div className={"flex flex-row items-center w-full h-16 border-b-2 bg-gray-50"}>
            <div className={"flex items-center justify-center w-12 h-12 ml-5 text-center bg-white border border-gray-200 rounded-md outline-none"}>
              <FiTrash2 size={24} className={"text-gray-500"} />
            </div>
            <span className={"ml-5 text-base font-medium text-gray-500"}>Trash</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidPanel
