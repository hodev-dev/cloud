import React from 'react'
import { FiBook, FiBookmark, FiBox, FiLayout, FiShield, FiUsers } from 'react-icons/fi'
import FlatButton from '../../../../../components/button/FlatButton'
import FlatNamedButton from '../../../../../components/button/FlatNamedButton'
import Navbar from '../../../../../components/Navbar/Navbar'
import NamedDivider from '../../../../../components/spacers/NamedDivider'

const SidePanel = () => {
  return (
    <div className={"hidden border border-t-0 border-b-0 border-l-0 border-gray-200 bg-gray-50 md:h-screen md:w-2/12 md:flex"}>
      <div className={"flex flex-col w-full h-screen"}>
        <Navbar>
          <FlatButton icon={FiLayout} />
        </Navbar>
        <NamedDivider name={"Apps"} />
        <FlatNamedButton shapeType={1} icon={FiShield} name={"Passwords"} border selected iconColor={"text-blue-800"} selectBorder={'bg-blue-800'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FiBox} name={"Files"} border iconColor={"text-rose-800"} selectBorder={'bg-rose-800'} selectBg={"bg-white"} />
        <FlatNamedButton shapeType={1} icon={FiBook} name={"Notes"} border iconColor={"text-purple-800"} selectBorder={'bg-purple-800'} selectBg={"bg-white"} />
        <FlatNamedButton shapeType={1} icon={FiBookmark} name={"Bookmarks"} border iconColor={"text-amber-800"} selectBorder={'bg-amber-800'} selectBg={"bg-white"} />
        <FlatNamedButton shapeType={1} icon={FiUsers} name={"Contacts"} border iconColor={"text-cyan-800"} selectBorder={'bg-cyan-800'} selectBg={"bg-white"} />
      </div>
    </div>
  )
}

export default SidePanel
