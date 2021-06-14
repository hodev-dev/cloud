import React, { Fragment, useState } from 'react'
import { FiClock, FiFolderPlus, FiMenu, FiStar, FiTrash2 } from 'react-icons/fi'
import FlatNamedButton from '../../../../../components/button/FlatNamedButton'
import Dropdown from '../../../../../components/dropdown/Dropdown'
import Navbar from '../../../../../components/Navbar/Navbar'
import NavbarFullControl from '../../../../../components/Navbar/NavbarFullControl'
import NamedDivider from '../../../../../components/spacers/NamedDivider'
import FolderListView from './FolderListView'
import NewFolder from './NewFolder'

const MidPanel = () => {

  const [passwordsFolderState, setPasswordFolderState] = useState([
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 0,
      name: "MasterPassword"
    },
    {
      id: 1,
      name: "Word"
    },
    {
      id: 2,
      name: "School"
    },
  ]);

  const [passwordFolderSelect, setPasswordFolderSelect] = useState(-4);
  const [showNewFolder, setShowNewFolder] = useState(false);

  const handleSelectFolder = (folderIndex: number) => {
    setPasswordFolderSelect(folderIndex);
  }

  return (
    <div className={"hidden h-screen overflow-hidden border border-t-0 border-b-0 border-l-0 border-gray-200 bg-gray-50 md:w-2/12 md:flex"}>
      <div className={"flex flex-col w-full h-screen "}>
        <div className={"top-0 min-h-14"}>
          <Navbar>
            <NavbarFullControl>
              <Dropdown icon={FiFolderPlus}>
                {(open: boolean, active: boolean) => (
                  <NewFolder key={"new-folder"} isVisible={open} />
                )}
                {(open: boolean, active: boolean) => (<Fragment></Fragment>)}
              </Dropdown>
            </NavbarFullControl>
          </Navbar>
        </div>
        <div className={"overflow-y-hidden hover:overflow-y-scroll"}>
          <NamedDivider name={"Vaults"} />
          <FlatNamedButton shapeType={4} noIcon key={'pAll'} selected={(passwordFolderSelect === -4) ? true : false} onClick={() => handleSelectFolder(-4)} icon={FiMenu} name="Work" border iconColor={"text-blue-500"} selectBorder={'bg-blue-500'} selectBg={"bg-gray-100"} />
          <FlatNamedButton shapeType={4} noIcon key={'pRecent'} selected={(passwordFolderSelect === -3) ? true : false} onClick={() => handleSelectFolder(-3)} icon={FiClock} name="Personal" border iconColor={"text-purple-500"} selectBorder={'bg-indigo-500'} selectBg={"bg-gray-100"} />
          <FlatNamedButton shapeType={4} noIcon key={'pFavorite'} selected={(passwordFolderSelect === -2) ? true : false} onClick={() => handleSelectFolder(-2)} icon={FiStar} name="Share" border iconColor={"text-yellow-500"} selectBorder={'bg-yellow-500'} selectBg={"bg-gray-100"} />
          <FlatNamedButton shapeType={4} noIcon key={'pTrash'} selected={(passwordFolderSelect === -1) ? true : false} onClick={() => handleSelectFolder(-1)} icon={FiTrash2} name="Server" border iconColor={"text-red-500"} selectBorder={'bg-rose-500'} selectBg={"bg-gray-100"} />
          <NamedDivider name={"Groups"} />
          <FlatNamedButton shapeType={3} noIcon key={'pAll'} selected={(passwordFolderSelect === -4) ? true : false} onClick={() => handleSelectFolder(-4)} icon={FiMenu} name="All" border iconColor={"text-blue-500"} selectBorder={'bg-teal-500'} selectBg={"bg-gray-100"} />
          <FlatNamedButton shapeType={3} noIcon key={'pRecent'} selected={(passwordFolderSelect === -3) ? true : false} onClick={() => handleSelectFolder(-3)} icon={FiClock} name="Recent" border iconColor={"text-purple-500"} selectBorder={'bg-indigo-500'} selectBg={"bg-gray-100"} />
          <FlatNamedButton shapeType={3} noIcon key={'pFavorite'} selected={(passwordFolderSelect === -2) ? true : false} onClick={() => handleSelectFolder(-2)} icon={FiStar} name="Favorite" border iconColor={"text-yellow-500"} selectBorder={'bg-yellow-500'} selectBg={"bg-gray-100"} />
          <FlatNamedButton shapeType={3} noIcon key={'pTrash'} selected={(passwordFolderSelect === -1) ? true : false} onClick={() => handleSelectFolder(-1)} icon={FiTrash2} name="Trash" border iconColor={"text-red-500"} selectBorder={'bg-rose-500'} selectBg={"bg-gray-100"} />
          <NamedDivider name={"Categories"} />
          <FolderListView folderList={passwordsFolderState} />
        </div>
      </div>
    </div>
  )
}

export default MidPanel
