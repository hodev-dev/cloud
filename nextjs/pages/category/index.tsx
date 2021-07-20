import Header from '@components/Header';
import makeAxios from '@helper/makeAxios';
import { findIdByName, select, tabs, tabsSelector } from '@redux/tabs/tabSlice';
import { AxiosError, AxiosResponse } from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAndroid, FaApple, FaAppStore, FaGooglePlay, FaLinux, FaPlaystation, FaSteam, FaWindows, FaXbox } from 'react-icons/fa';
import { SiEpicgames } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';
import NamedDivider from '../../components/spacers/NamedDivider';

enum GenreStatus {
    LOADING,
    IDLE,
    FAILED
}

const CategoryPage = () => {
    const dispatch = useDispatch();
    const _tabsState = useSelector(tabsSelector);
    const Axios = makeAxios();
    const [genres, setGenres] = useState([]);
    const [genresStatus, setGenresStatus] = useState(GenreStatus.LOADING);

    useEffect(() => {
        const tab = findIdByName(tabs, "Category");
        dispatch(select(tab.id));
    }, [dispatch])

    useEffect(() => {
        const request = Axios.get('/api/genres/');
        request.then((response: AxiosResponse) => {
            console.log(response.data);
            setGenres(response.data);
            setGenresStatus(GenreStatus.IDLE);
        }).catch((error: AxiosError) => {
            console.log(error.message);
        });
    }, [])

    const renderGenres = () => {
        return genres.map((genre: any, index: number) => {
            return (
                <div className={`flex flex-row flex-wrap w-1/2 bg-white cursor-pointer hover:bg-gray-100`}>
                    <div className={`flex items-center justify-center w-full h-16 border border-t-0 border-t-0 border-r-0`}>
                        <h1 className={"font-medium text-gray-500 text-md"}>{genre.name}</h1>
                    </div>
                </div>
            )
        });
    }

    const renderGenreStatus = () => {
        if (genresStatus === GenreStatus.LOADING) {
            return (
                <div className={"flex flex-col items-center justify-center w-full h-screen"}>
                    <RotateSpinner size={150} color="#881337" loading={true} />;
                    <h1 className={"mt-8 text-2xl"}>Loading</h1>
                </div>
            )
        } else if (genresStatus === GenreStatus.IDLE) {
            return renderGenres()
        } else {
            return (
                <div className={"flex flex-col items-center justify-center w-full h-screen"}>
                    <h1 className={"mt-8 text-2xl"}>FAILED</h1>
                </div>
            )
        }
    }

    return (
        <>
            <Header tabsState={_tabsState} />
            <NamedDivider name={"پلتفرم ها"} />
            <div className={"flex flex-row flex-wrap w-full h-auto bg-white"}>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link href={"/platform/IOS?group=ios"} >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaApple size={32} className={"text-gray-800 fill-current"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'IOS'}</h1>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link href={"/platform/Android?group=android"} >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaAndroid size={32} className={"text-teal-500 fill-current"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Android'}</h1>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link
                        href={"/platform/PlayStation?group=playstation5,playstation4,playstation3,playstation2,playstation1"}
                    >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaPlaystation size={32} className={"text-blue-700 fill-current"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'PlayStation'}</h1>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link href={"/platform/Xbox?group=xbox-one,xbox-series-x,xbox360,xbox-old"} >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaXbox size={32} className={"text-green-700 fill-current"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Xbox'}</h1>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link href={"/platform/PC?group=pc"} >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaWindows size={32} className={"text-blue-500 fill-current"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'PC'}</h1>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link href={"/platform/Linux?group=linux"} >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaLinux size={32} className={"fill-current text-amber-800"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Linux'}</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <NamedDivider name={"فروشگاه ها"} />
            <div className={"flex flex-row flex-wrap w-full h-auto bg-white"}>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <Link href={"/store/1/"} >
                        <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                            <div className={"flex items-center justify-center mr-5 "}>
                                <FaAppStore size={32} className={"text-gray-800 fill-current"} />
                            </div>
                            <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'App Store'}</h1>
                        </div>
                    </Link>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                        <div className={"flex items-center justify-center mr-5 "}>
                            <FaGooglePlay size={32} className={"text-pink-700 fill-current"} />
                        </div>
                        <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Google Play'}</h1>
                    </div>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                        <div className={"flex items-center justify-center mr-5 "}>
                            <FaPlaystation size={32} className={"text-blue-700 fill-current"} />
                        </div>
                        <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'PlayStation'}</h1>
                    </div>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                        <div className={"flex items-center justify-center mr-5 "}>
                            <FaXbox size={32} className={"text-green-700 fill-current"} />
                        </div>
                        <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Xbox'}</h1>
                    </div>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                        <div className={"flex items-center justify-center mr-5 "}>
                            <FaSteam size={32} className={"text-indigo-800 fill-current"} />
                        </div>
                        <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Steam'}</h1>
                    </div>
                </div>
                <div className={"flex flex-row flex-wrap w-1/6 bg-white cursor-pointer hover:bg-gray-100"}>
                    <div className={"flex items-center justify-center w-full h-16 border border-t-0 border-r-0"}>
                        <div className={"flex items-center justify-center mr-5 "}>
                            <SiEpicgames size={32} className={"text-black fill-current"} />
                        </div>
                        <h1 className={"flex items-center justify-center h-16 text-xl font-medium text-gray-500 "}>{'Epic'}</h1>
                    </div>
                </div>
            </div>
            <NamedDivider name={"ژانر ها"} />
            <div className={"flex flex-row flex-wrap w-full bg-white "}>
                {renderGenreStatus()}
            </div>
        </>
    )
}

export default CategoryPage
