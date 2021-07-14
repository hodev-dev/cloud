import React, { useEffect } from 'react';
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { RiMacbookLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { findIdByName, select, tabs, tabsSelector } from '../../../features/tabs/tabSlice';
import Header from '../../partials/Header';

const Platform = () => {
  const dispatch = useDispatch();
  const _tabsState = useSelector(tabsSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Platform");
    dispatch(select(tab.id));
  }, [dispatch])

  return (
    <>
      <Header tabsState={_tabsState} />
      <div className={"flex flex-row flex-wrap w-full h-auto bg-white"}>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <FaApple size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'IOS'}</h1>
          </div>
        </div>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <FaAndroid size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'Abdroid'}</h1>
          </div>
        </div>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <FaPlaystation size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'PlayStation'}</h1>
          </div>
        </div>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <FaXbox size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'Xbox'}</h1>
          </div>
        </div>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <FaWindows size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'PC'}</h1>
          </div>
        </div>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <FaLinux size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'Linux'}</h1>
          </div>
        </div>
        <div className={"flex flex-row flex-wrap w-1/3 bg-white cursor-pointer hover:bg-gray-100"}>
          <div className={"flex items-center justify-center w-full h-32 border border-t-0 border-r-0"}>
            <div className={"flex items-center mr-5 justify-center-16 "}>
              <RiMacbookLine size={48} className={"text-gray-700 fill-current"} />
            </div>
            <h1 className={"flex items-center justify-center h-16 text-4xl font-bold text-gray-500 "}>{'Mac'}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Platform
