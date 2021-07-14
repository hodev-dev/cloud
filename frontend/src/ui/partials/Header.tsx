import React from 'react'
import { FaChartBar, FaHashtag, FaHome } from 'react-icons/fa'
import { FiBell, FiGrid, FiMenu, FiSettings } from 'react-icons/fi'
import FlatButton from '../components/button/FlatButton'
import FlatNamedButton from '../components/button/FlatNamedButton'
import Navbar from '../components/Navbar/Navbar'
import NavbarCenterControl from '../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../components/Navbar/NavbarRightControl'

const Header = (props: any) => {

  const renderTabs = () => {
    return props.tabsState.map((tab: any) => {
      return (
        <div className={"flex flex-wrap w-1/6 h-auto bg-blue-500"} key={tab.name.toString()}>
          <FlatNamedButton to={tab.route} shapeType={1} icon={tab.icon} name={tab.name} border selected={tab.selected} iconColor={"text-gray-600"} selectColor={'bg-rose-500'} selectBg={"bg-gray-100"} />
        </div>
      );
    });
  }

  return (
    <div className={"relative flex flex-col w-full h-auto bg-white md:w-full"} dir={"rtl"}>
      <Navbar desktop>
        <NavbarLeftControl>
          <FlatButton icon={FaHome} />
          <FlatButton icon={FiGrid} />
          <FlatButton icon={FiMenu} />
        </NavbarLeftControl>
        <NavbarCenterControl>
          <input className={"flex items-center justify-center w-11/12 h-10 text-center text-gray-700 bg-white border border-gray-300 rounded-md "} placeholder="Search /passwords" />
        </NavbarCenterControl>
        <NavbarRightControl desktop>
          <FlatButton icon={FaChartBar} />
          <FlatButton icon={FaHashtag} />
          <FlatButton icon={FiBell} />
          <FlatButton icon={FiSettings} />
        </NavbarRightControl>
      </Navbar>
      <div className={"flex flex-row flex-wrap w-full font-shabnam"}>
        {renderTabs()}
      </div>
    </div >
  )
}

export default Header
