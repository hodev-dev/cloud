import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RotateSpinner } from "react-spinners-kit";
import { findIdByName, select, tabs, tabsSelector } from "../../../features/tabs/tabSlice";
import makeAxios from "../../../helper/makeAxios";
import Header from "../../partials/Header";

enum TagsStatus {
  LOADING,
  IDLE,
  FAILED
}

const Tag = () => {
  const dispatch = useDispatch();
  const _tabsState = useSelector(tabsSelector);
  const Axios = makeAxios();
  const [tags, setTags] = useState<any>([]);
  const [tagsStatus, setTagStatus] = useState(TagsStatus.LOADING);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const tab = findIdByName(tabs, "Tag");
    dispatch(select(tab.id));
  }, [dispatch])

  useEffect(() => {
    const request = Axios.get('/api/tags/?page=' + currentPage);
    request.then((response: AxiosResponse) => {
      console.log(response.data);
      const newArray = [...tags, ...response.data.data];
      setTags(newArray);
      setLastPage(response.data.last_page);
      setTagStatus(TagsStatus.IDLE);
    }).catch((error: AxiosError) => {
      setTagStatus(TagsStatus.FAILED);
      console.log(error.message);
    });
  }, [currentPage])

  const renderStatus = () => {
    if (lastPage === currentPage) {
      return (
        <div className={"flex flex-row items-center justify-center w-full h-16 cursor-pointer hover:bg-gray-200"}>
          <p className={"text-lg font-shabnam"}>
            😒 مطالب بیشتری وجود ندارد
          </p>
        </div>
      )
    } else {
      return (
        <div onClick={handleMore} className={"flex flex-row items-center justify-center w-full h-16 border border-t-0 cursor-pointer hover:bg-gray-200"}>
          <p className={"text-lg font-shabnam"}>
            بیشتر
          </p>
        </div>
      )
    }
  }

  const handleMore = () => {
    if (currentPage + 1 <= lastPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const renderTags = () => {
    if (tagsStatus === TagsStatus.LOADING) {
      return (
        <div className={"flex flex-col items-center justify-center w-full h-screen"}>
          <RotateSpinner size={150} color="#881337" loading={true} />;
          <h1 className={"mt-8 text-2xl"}>Loading</h1>
        </div>
      )
    } else if (tagsStatus === TagsStatus.IDLE) {
      return tags.map((tag: any) => {
        return (
          <div className={"flex items-center justify-center w-1/3 h-16 border border-t-0 border-r-0 cursor-pointer hover:bg-gray-100"}>
            <h1 className={"font-medium text-gray-500 text-md"}>{tag.name}</h1>
          </div>
        )
      })
    } else {
      return (
        <div className={"flex flex-row items-center justify-center w-full h-screen"}>
          <h1 className={"text-2xl text-black "}>FAILED</h1>
        </div>
      )
    }
  }

  return (
    <>
      <Header tabsState={_tabsState} />
      <div className={"flex flex-row flex-wrap w-full h-auto bg-white"}>
        {renderTags()}
        {renderStatus()}
      </div>
    </>
  )
}

export default Tag
