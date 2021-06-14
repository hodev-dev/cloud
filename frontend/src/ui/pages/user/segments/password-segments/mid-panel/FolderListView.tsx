import { FiX } from "react-icons/fi";
import FlatNamedButton from "../../../../../components/button/FlatNamedButton";

interface renderFolderInterface {
  folderList: any
}

const FolderListView = (props: renderFolderInterface) => {

  const renderFolderList = (): () => Array<JSX.Element> => {
    return props.folderList.map((folder: any) => {
      return (
        <div key={folder.name.toString()} className={"flex flex-row items-center w-full h-12 bg-white border border-t-0 border-l-0 border-r-0 border-gray-200 btn"}>
          <FlatNamedButton selected shapeType={2} noIcon key={'pTrash'} icon={FiX} name="Trash" border iconColor={"text-red-500"} selectBorder={'bg-rose-500'} selectBg={"bg-gray-100"} />
        </div>
      )
    });
  }

  return (
    <>
      {renderFolderList()}
    </>
  )
}

export default FolderListView
