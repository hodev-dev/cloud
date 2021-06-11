import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import ContentPanel from './components/ContentPanel';
import MidPanel from './components/MidPanel';
import PasswordEditor from './components/PasswordEditor';
import SidePanel from './components/SidePanel';

const UserHome = () => {
  const [showPasswordsModal, setShowPPasswordsModal] = useState(true);
  const [passwordEditorCoordination, setPasswordEditorCoordination] = useState({ x: 0, y: 0 });
  return (
    <div className={"relative flex flex-row w-full h-screen overflow-hidden bg-white"}>
      <SidePanel />
      <MidPanel />
      <ContentPanel />
      <Rnd
        size={(showPasswordsModal === false) ? { width: 0, height: 0 } : { width: "100%", height: "100%" }}
        position={{ x: passwordEditorCoordination.x, y: passwordEditorCoordination.y }}
        onDragStop={(e, d) => { setPasswordEditorCoordination({ x: d.x, y: d.y }) }}
        cancel=".cancel"
        className={`${(showPasswordsModal) ? "w-full h-screen" : "hidden"} `}
        dragHandleClassName={"dragHandle"}
        default={{
          x: 0,
          y: 0,
          width: "100 %",
          height: "100 %",
        }}
      >
        <PasswordEditor showPasswordModal={showPasswordsModal} setShowPAsswordModal={setShowPPasswordsModal} />
      </Rnd>
    </div >
  )
}

export default UserHome
