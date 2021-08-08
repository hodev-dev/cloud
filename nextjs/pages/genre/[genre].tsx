import NamedDivider from '@components/spacers/NamedDivider';
import TabNav from '@components/TabNav';
import makeAxios from '@helper/makeAxios';
import { findIdByName, select, tabs, tabsSelector } from '@redux/tabs/tabSlice';
import { AxiosError, AxiosResponse } from 'axios';
import Img from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';

enum GenreGameStatus {
   LOADING,
   IDLE,
   FAILED,
}

const GenrePage = ({ genre }) => {
   const [games, setGames] = useState<any>([]);
   const [gameStatus, setGameStatus] = useState(GenreGameStatus.LOADING);
   const [currentPage, setCurrentPage] = useState(1);
   const [lastPage, setLastPage] = useState(0);

   const dispatch = useDispatch();
   const _tabsState = useSelector(tabsSelector);
   const Axios = makeAxios();

   useEffect(() => {
      Axios.get('/api/genres/' + genre + '/?page=' + currentPage)
         .then((response: AxiosResponse) => {
            console.log(response);
            const newArray = [...games, ...response.data.data];
            setGames(newArray);
            setCurrentPage(response.data.current_page);
            setLastPage(response.data.last_page);
            setGameStatus(GenreGameStatus.IDLE);
         })
         .catch((error: AxiosError) => {
            console.log({ error });
            setGameStatus(GenreGameStatus.FAILED);
         });
   }, [currentPage]);

   useEffect(() => {
      const tab = findIdByName(tabs, 'Category');
      dispatch(select(tab.id));
   }, [dispatch]);

   const handleMore = () => {
      if (currentPage + 1 <= lastPage) {
         setCurrentPage(currentPage + 1);
      }
   };

   const renderStatus = () => {
      if (lastPage === currentPage) {
         return (
            <div onClick={handleMore} className={'flex flex-row items-center justify-center w-full h-16 cursor-pointer hover:bg-gray-200'}>
               <p className={'text-lg font-shabnam'}>😒 مطالب بیشتری وجود ندارد</p>
            </div>
         );
      } else {
         return (
            <div onClick={handleMore} className={'flex flex-row items-center justify-center w-full h-16 cursor-pointer hover:bg-gray-200'}>
               <p className={'text-lg font-shabnam'}>بیشتر</p>
            </div>
         );
      }
   };

   const renderGames = () => {
      if (gameStatus === GenreGameStatus.LOADING) {
         return (
            <div className={'flex flex-col items-center justify-center w-full h-screen'}>
               <RotateSpinner size={150} color="#881337" loading={true} />;<h1 className={'mt-8 text-2xl'}>Loading</h1>
            </div>
         );
      } else if (gameStatus == GenreGameStatus.IDLE) {
         return games.map((game: any) => {
            return (
               <div key={game.name} className={'flex flex-wrap w-1/6 h-auto rounded-2xl'} dir={'rtl'}>
                  <div key={'img1'} className={'relative flex flex-col w-full h-auto bg-white shadow-sm cursor-pointer'} dir={'rtl'}>
                     <div className={'flex w-full h-auto '} style={{ backgroundColor: game.color }}>
                        <div className={'object-cover w-full h-96'}>
                           <Img
                              loading={'eager'}
                              alt={'img1'}
                              quality={10}
                              objectFit="cover"
                              layout={'fill'}
                              src={'http://localhost:8000' + game.background_image}
                           />
                        </div>
                     </div>
                     <div
                        style={{
                           backgroundImage: `linear-gradient(to top, ${game.color} 16%, transparent 50%`,
                        }}
                        className={'absolute top-0 flex items-end justify-center w-full opacity-100 h-96 '}
                     >
                        <h1 className={'p-4 font-medium text-center text-white text-md'}>{game.name}</h1>
                     </div>
                  </div>
               </div>
            );
         });
      } else {
         return (
            <div className={'flex flex-row items-center justify-center w-full h-screen'}>
               <h1 className={'text-3xl text-gray-500'}>FAILED</h1>
            </div>
         );
      }
   };

   return (
      <>
         <TabNav tabsState={_tabsState} />
         <NamedDivider name={'ژانر:' + ' ' + genre} size={'text-lg font-medium'} dir={'rtl'} />
         <div className={'flex flex-col flex-wrap w-full h-auto bg-white'}>
            <div className={'flex flex-wrap w-full'}>{renderGames()}</div>
         </div>
         {renderStatus()}
      </>
   );
};

export default GenrePage;

export async function getServerSideProps({ params }) {
   const genre = params.genre;
   return {
      props: { genre }, // will be passed to the page component as props
   };
}
