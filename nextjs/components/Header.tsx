import React from 'react';
import { FaChartBar, FaHashtag, FaHome } from 'react-icons/fa';
import { FiBell, FiGrid, FiMenu, FiSettings } from 'react-icons/fi';
import FlatButton from './button/FlatButton';
import Navbar from './Navbar/Navbar';
import NavbarCenterControl from './Navbar/NavbarCenterControl';
import NavbarLeftControl from './Navbar/NavbarLeftControl';
import NavbarRightControl from './Navbar/NavbarRightControl';

const Header = () => {
   return (
      <div className={'relative flex flex-col w-full h-auto bg-black md:w-full'} dir={'rtl'}>
         <Navbar desktop>
            <NavbarLeftControl>
               <FlatButton icon={FaHome} />
               <FlatButton icon={FiGrid} />
               <FlatButton icon={FiMenu} />
            </NavbarLeftControl>
            <NavbarCenterControl>
               <input className={'flex items-center justify-center w-11/12 h-10 text-center text-gray-800 bg-black border rounded-md border-warmGray-800 '} placeholder="Search /passwords" />
            </NavbarCenterControl>
            <NavbarRightControl desktop>
               <FlatButton icon={FaChartBar} />
               <FlatButton icon={FaHashtag} />
               <FlatButton icon={FiBell} />
               <FlatButton icon={FiSettings} />
            </NavbarRightControl>
         </Navbar>
      </div>
   );
};

export default Header;
