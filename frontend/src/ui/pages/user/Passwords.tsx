import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import ContentPanel from './segments/password-segments/content-panel/ContentPanel';
import MidPanel from './segments/password-segments/mid-panel/MidPanel';
import PasswordEditor from './segments/password-segments/overlay-panel/PasswordEditor';
import SidePanel from './segments/password-segments/side-panel/SidePanel';

const Passwords = () => {
  const [showPasswordModal, setShowPasswordsModal] = useState(true);
  const [passwordEditorCoordination, setPasswordEditorCoordination] = useState({ x: 0, y: 0 });
  return (
    <div className={"relative flex flex-row w-full h-screen overflow-hidden bg-white"}>
      <SidePanel />
      <MidPanel />
      <ContentPanel />
      <Rnd
        size={(showPasswordModal === false) ? { width: 0, height: 0 } : { width: "100%", height: "100%" }}
        position={{ x: passwordEditorCoordination.x, y: passwordEditorCoordination.y }}
        onDragStop={(e, d) => { setPasswordEditorCoordination({ x: d.x, y: d.y }) }}
        cancel=".cancel"
        className={`${(showPasswordModal) ? "w-full h-screen" : "hidden"} `}
        dragHandleClassName={"dragHandle"}
        default={{
          x: 0,
          y: 0,
          width: "100 %",
          height: "100 %",
        }}
      >
        <PasswordEditor showPasswordModal={showPasswordModal} setShowPasswordsModal={setShowPasswordsModal} />
      </Rnd>
    </div >
  )
}

export default Passwords
