import React from 'react';
import ContentPanel from './components/ContentPanel';
import MidPanel from './components/MidPanel';
import SidePanel from './components/SidePanel';

const UserHome = () => {
  return (
    <div className={"flex flex-row w-full h-screen overflow-hidden bg-white"}>
      <SidePanel />
      <MidPanel />
      <ContentPanel />
    </div>
  )
}

export default UserHome
