import React from 'react'
import { FiBook, FiBookmark, FiBox, FiLayout, FiShield, FiUsers } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'
import FlatNamedButton from '../../../components/button/FlatNamedButton'

const SidePanel = () => {
  return (
    <div className={"hidden bg-gray-100 border border-t-0 border-b-0 border-l-0 border-gray-200 md:h-screen md:w-2/12 md:flex"}>
      <div className={"flex flex-col w-full h-screen"}>
        <div className={"flex items-center w-full h-16 bg-white border border-l-0 border-r-0 border-gray-200"}>
          <FlatButton icon={FiLayout} />
        </div>
        <FlatNamedButton icon={FiShield} name={"Passwords"} border selected iconColor={"text-blue-800"} selectBorder={'border-blue-800'} selectBg={"bg-blue-50"} />
        <FlatNamedButton icon={FiBox} name={"Files"} border iconColor={"text-rose-800"} selectBorder={'border-rose-800'} selectBg={"bg-rose-50"} />
        <FlatNamedButton icon={FiBook} name={"Notes"} border iconColor={"text-purple-800"} selectBorder={'border-purple-800'} selectBg={"bg-purple-50"} />
        <FlatNamedButton icon={FiBookmark} name={"Bookmarks"} border iconColor={"text-amber-800"} selectBorder={'border-amber-800'} selectBg={"bg-amber-50"} />
        <FlatNamedButton icon={FiUsers} name={"Contacts"} border iconColor={"text-cyan-800"} selectBorder={'border-cyan-800'} selectBg={"bg-cyan-50"} />
      </div>
    </div>
  )
}

export default SidePanel
