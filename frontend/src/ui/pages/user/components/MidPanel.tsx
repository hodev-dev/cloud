import React, { useState } from 'react'
import { FiClock, FiFolderPlus, FiHash, FiMenu, FiPlus, FiStar, FiTrash2 } from 'react-icons/fi'
import FlatButton from '../../../components/button/FlatButton'
import FlatNamedButton from '../../../components/button/FlatNamedButton'
import Navbar from '../../../components/Navbar/Navbar'


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
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    },
    {
      id: 2,
      name: "School"
    }
  ]);

  const [passwordFolderSelect, setPasswordFolderSelect] = useState(-4);
  const [addFolderState, setAddFolderState] = useState(false);

  const handleSelectFolder = (folderIndex: number) => {
    setPasswordFolderSelect(folderIndex);
  }

  const renderPasswordsFolders = () => {
    return passwordsFolderState.map((passwordFolders: any) => {
      return (
        <FlatNamedButton selected={(passwordFolderSelect === passwordFolders.id) ? true : false} onClick={() => handleSelectFolder(passwordFolders.id)} icon={FiHash} name={passwordFolders.name} key={passwordFolders.name.toString()} border iconColor={"text-gray-500"} selectBorder={'border-gray-700'} selectBg={"bg-gray-100"} />
      )
    });
  }

  const renderAddFolderState = () => {
    if (addFolderState === true) {
      return (
        <div className={"flex flex-wrap items-center w-full h-16 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
          <input autoFocus className={"w-10/12 h-12 p-2 text-center border rounded-l-sm outline-none focus:border-gray-700 focus:border-2"} type="text" placeholder={"Enter Folder Name"} />
          <div className={"flex flex-row items-center justify-start w-2/12"}>
            <FlatButton noGap icon={FiPlus} />
          </div>
          {/* <button className={"flex flex-row items-center justify-center w-1/3 h-12 font-medium text-gray-700 bg-white border rounded-r-sm hover:bg-gray-100"}>Create</button> */}
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    <div className={"hidden h-screen overflow-hidden bg-gray-100 border border-t-0 border-b-0 border-l-0 border-gray-200 md:w-2/12 md:flex"}>
      <div className={"flex flex-col w-full h-screen "}>
        <div className={"min-h-16"}>
          <Navbar>
            <FlatButton onClick={() => setAddFolderState((prevState) => !prevState)} icon={FiFolderPlus} selected={addFolderState} />
          </Navbar>
        </div>
        <div className={"overflow-y-hidden hover:overflow-y-scroll"}>
          <FlatNamedButton key={'pAll'} selected={(passwordFolderSelect === -4) ? true : false} onClick={() => handleSelectFolder(-4)} icon={FiMenu} name="All" border iconColor={"text-blue-500"} selectBorder={'bg-blue-700'} selectBg={"bg-blue-50"} />
          <FlatNamedButton key={'pRecent'} selected={(passwordFolderSelect === -3) ? true : false} onClick={() => handleSelectFolder(-3)} icon={FiClock} name="Recent" border iconColor={"text-purple-500"} selectBorder={'bg-purple-700'} selectBg={"bg-purple-50"} />
          <FlatNamedButton key={'pFavorite'} selected={(passwordFolderSelect === -2) ? true : false} onClick={() => handleSelectFolder(-2)} icon={FiStar} name="Favorite" border iconColor={"text-yellow-500"} selectBorder={'bg-yellow-700'} selectBg={"bg-yellow-50"} />
          <FlatNamedButton key={'pTrash'} selected={(passwordFolderSelect === -1) ? true : false} onClick={() => handleSelectFolder(-1)} icon={FiTrash2} name="Trash" border iconColor={"text-red-500"} selectBorder={'bg-red-700'} selectBg={"bg-red-50"} />
          <div className={"flex flex-row items-center h-16 text-gray-700 border border-t-0 border-r-0 bg-gray-50"}>
            <h1 className={"m-4"}>Categories</h1>
          </div>
          {renderAddFolderState()}
          <div>
          </div>
          {renderPasswordsFolders()}
        </div>
      </div>
    </div>
  )
}

export default MidPanel
