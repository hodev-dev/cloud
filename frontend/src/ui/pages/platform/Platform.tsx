import React, { useEffect } from 'react';
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
      <div className={"relative flex flex-col w-full h-screen bg-white"}>
        <div className={"flex items-center justify-center w-full h-screen bg-gray-50"}>
          <p className={"text-4xl text-gray-300"}>Platform</p>
        </div>
      </div>
    </>
  )
}

export default Platform
