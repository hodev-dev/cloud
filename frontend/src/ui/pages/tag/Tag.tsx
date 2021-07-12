import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findIdByName, select, tabs, tabsSelector } from "../../../features/tabs/tabSlice";
import Header from "../../partials/Header";

const Tag = () => {
  const dispatch = useDispatch();
  const _tabsState = useSelector(tabsSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Tag");
    dispatch(select(tab.id));
  }, [dispatch])

  return (
    <>
      <Header tabsState={_tabsState} />
      <div className={"relative flex flex-row flex-wrap w-full bg-white"}>
        <div className={"flex items-center justify-center w-3/12 h-24 border border-t-0 border-r-0"}>
          <h1 className={"font-mono text-xl text-gray-500"}>#SinglePlayerForNoobs</h1>
        </div>
      </div>
    </>
  )
}

export default Tag
