import React from 'react'
import { FaBookReader, FaFolder, FaGamepad, FaHashtag, FaHome, FaStarOfLife, FaStore } from 'react-icons/fa'
import { FiBell, FiGrid, FiMenu, FiSettings } from 'react-icons/fi'
import FlatButton from '../components/button/FlatButton'
import FlatNamedButton from '../components/button/FlatNamedButton'
import Navbar from '../components/Navbar/Navbar'
import NavbarCenterControl from '../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../components/Navbar/NavbarRightControl'

const Header = () => {
  return (
    <div className={"relative flex flex-col w-full h-auto bg-white md:w-full"} dir={"rtl"}>
      <Navbar desktop>
        <NavbarLeftControl>
          <FlatButton icon={FiGrid} />
          <FlatButton icon={FiMenu} />
        </NavbarLeftControl>
        <NavbarCenterControl>
          <input className={"flex items-center justify-center w-11/12 h-10 text-center text-gray-700 bg-white border border-gray-300 rounded-md "} placeholder="Search /passwords" />
        </NavbarCenterControl>
        <NavbarRightControl desktop>
          <FlatButton icon={FiBell} />
          <FlatButton icon={FiSettings} />
        </NavbarRightControl>
      </Navbar>
      <div className={"flex flex-row w-full font-shabnam"}>
        <FlatNamedButton shapeType={1} icon={FaHome} name={"خانه"} border selected iconColor={"text-gray-600"} selectColor={'bg-rose-600'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FaGamepad} name={"پلتفرم"} border iconColor={"text-gray-600"} selectColor={'bg-gray-600'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FaStore} name={"فروشگاه"} border iconColor={"text-gray-600"} selectColor={'bg-gray-600'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FaFolder} name={"کالکشن"} border iconColor={"text-gray-600"} selectColor={'bg-gray-600'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FaHashtag} name={"تگ"} border iconColor={"text-gray-500"} selectColor={'bg-gray-500'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FaStarOfLife} name={"ژانر"} border iconColor={"text-gray-600"} selectColor={'bg-gray-600'} selectBg={"bg-gray-100"} />
        <FlatNamedButton shapeType={1} icon={FaBookReader} name={"ناشر"} border iconColor={"text-gray-600"} selectColor={'bg-gray-600'} selectBg={"bg-gray-100"} />
      </div>
    </div >
  )
}

export default Header
