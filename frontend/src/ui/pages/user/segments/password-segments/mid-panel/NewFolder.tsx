import { Fragment } from 'react';
import Circle from 'react-color/lib/components/circle/Circle';
import { FiPlus } from "react-icons/fi";
import FlatButton from "../../../../../components/button/FlatButton";

interface NewFolderInterface {
  isVisible: boolean
}

const NewFolder = (props: NewFolderInterface) => {
  const renderPanel = () => {
    if (props.isVisible) {
      return (
        <Fragment>
          <div className={"flex flex-col items-center justify-center w-full h-auto rounded-md bg-gray-50"}>
            <div className={"flex flex-row items-center justify-center w-full h-12 border border-t-0 border-l-0 border-r-0"}>
              <input autoFocus className={"w-8/12 text-sm text-center outline-none h-9 ring-1 ring-gray-300 focus:border-gray-400"} type="text" placeholder={"Enter Folder Name"} />
              <div className={"flex flex-row items-center justify-start w-2/12"}>
                <FlatButton size={"w-9 h-9"} icon={FiPlus} />
              </div>
            </div>
            <div className={"flex justify-center w-full h-auto p-4 overflow-hidden bg-white border border-t-0 border-l-0 border-r-0"}>
              <Circle className={"w-full"} colors={['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']} />
            </div>
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      {renderPanel()}
    </>
  )
}

export default NewFolder
