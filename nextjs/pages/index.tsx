import Catalog from '@components/Catalog';
import Header from '@components/Header';
import TabNav from '@components/TabNav';
import makeAxios from '@helper/makeAxios';
import { findIdByName, select, tabs, tabsSelector } from '@redux/tabs/tabSlice';
import React, { Fragment, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { ImpulseSpinner } from 'react-spinners-kit';

const HomePage = ({ initialGames, last }) => {
   const queryClient = useQueryClient();
   const delay = (ms) => new Promise((res) => setTimeout(res, ms));

   const requestMoreGames = async ({ pageParam = 1 }) => {
      if (pageParam !== 1) {
         const Axios = makeAxios();
         const response = await Axios.get('/api/games/?page=' + pageParam);
         return response.data;
      } else {
         return initialGames;
      }
   };

   const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery('projects', requestMoreGames, {
      initialData: { pages: [initialGames], pageParams: [undefined] },
      staleTime: 1000000000,
      getNextPageParam: (lastPage, pages) => {
         if (lastPage.current_page <= lastPage.last_page - 1) {
            return lastPage.current_page + 1;
         }
         return false;
      },
   });

   const dispatch = useDispatch();
   const _tabsState = useSelector(tabsSelector);

   useEffect(() => {
      const tab = findIdByName(tabs, 'Home');
      dispatch(select(tab.id));
   }, [dispatch, data]);

   const renderGameStatus = () => {
      if (hasNextPage === false) {
         return (
            <div className={'flex flex-row items-center justify-center w-full h-16 cursor-pointer hover:bg-gray-200'}>
               <p className={'text-lg font-shabnam'}>😒 مطالب بیشتری وجود ندارد</p>
            </div>
         );
      }

      if (status === 'loading') {
         return (
            <div className={'flex flex-row items-center justify-center w-full h-16 cursor-pointer hover:bg-gray-200'}>
               <ImpulseSpinner size={68} frontColor="#881337" loading={true} />
            </div>
         );
      } else {
         return (
            <div onClick={() => fetchNextPage()} className={'flex flex-row items-center justify-center w-full h-16 cursor-pointer hover:bg-warmGray-cover'}>
               <FaDownload className={'text-gray-300 fill-current'} />
               <p className={'ml-5 text-lg text-gray-200 font-shabnam'}>بیشتر</p>
            </div>
         );
      }
   };

   const renderCatalogs = () => {
      return data.pages.map((page, index) => {
         return (
            <Fragment key={page.data.url * index}>
               <div className={'grid h-auto grid-cols-6 gap-4 mt-4'}>
                  <Catalog games={page.data} />
               </div>
            </Fragment>
         );
      });
   };

   return (
      <div className={'bg-black'}>
         <Header />
         <TabNav tabsState={_tabsState} />
         <div className={'w-full h-auto '}>{renderCatalogs()}</div>
         <div className={'border border-warmGray-800'}>{renderGameStatus()}</div>
      </div>
   );
};

export const getServerSideProps = async ({}) => {
   const Axios = makeAxios();
   const request = await Axios.get('/api/games/?page=1');
   const { data: initialGames } = request;

   return {
      props: { initialGames },
   };
};

export default HomePage;
