import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findIdByName, select, tabs, tabsSelector } from "../../../features/tabs/tabSlice";
import Header from "../../partials/Header";

const News = () => {

  const dispatch = useDispatch();
  const _tabsState = useSelector(tabsSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "News");
    dispatch(select(tab.id));
  }, [dispatch])

  return (
    <>
      <Header tabsState={_tabsState} />
      <div className={"relative flex flex-col w-full h-screen bg-white"}>
        <div>
          <h1>News</h1>
        </div>
      </div>
    </>
  )
}

export default News
