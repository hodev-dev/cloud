import Card from '@components/Card';
import Header from '@components/Header';
import makeAxios from '@helper/makeAxios';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';

enum GameDataStatus {
   LOADING,
   IDLE,
   FAILED,
}

const GamePage = ({ slug }) => {
   const [gameData, setGameData] = useState<any>([]);
   const [gameStatus, setGameStatus] = useState(GameDataStatus.LOADING);
   const dispatch = useDispatch();
   const Axios = makeAxios();
   useEffect(() => {
      const request = Axios.get('/api/games/' + slug);
      request
         .then((response: AxiosResponse) => {
            console.log(response.data);
            setGameData(response.data);
            setGameStatus(GameDataStatus.IDLE);
         })
         .catch((error: AxiosError) => {
            console.log(error.message);
            setGameStatus(GameDataStatus.FAILED);
         });
   }, []);

   const renderGameData = () => {
      if (gameStatus === GameDataStatus.LOADING) {
         return (
            <div className={'flex flex-col items-center justify-center w-full h-screen'}>
               <RotateSpinner size={150} color="#881337" loading={true} />;<h1 className={'mt-8 text-2xl'}>Loading</h1>
            </div>
         );
      } else if (gameStatus == GameDataStatus.IDLE) {
         return (
            <div key={gameData.name} className={'relative flex flex-col justify-center object-fill w-full h-auto p-4 overflow-hidden'} dir={'rtl'} style={{ backgroundColor: gameData.color }}>
               <div
                  className={'absolute w-full h-mostscreen filter blur-3xl mix-blend-soft-light'}
                  style={{
                     backgroundImage: `url(${'http://localhost:8000' + gameData.background_image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center top',
                  }}
               ></div>
               <div className={'flex flex-row items-center justify-center w-full h-auto '}>
                  <div className={'z-10 flex flex-col items-center justify-center w-1/6 bg-transparent rounded-md h-96'}>
                     <img loading={'eager'} alt={'img1'} src={'http://localhost:8000' + gameData.background_image} className={'object-cover w-64 border-4 border-white rounded-md shadow-md h-72'} />
                     <h1 className={'flex flex-wrap items-center justify-center w-10/12 h-12 text-lg font-medium text-center text-white break-words'}>{gameData.name_original}</h1>
                  </div>
               </div>
            </div>
         );
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
         <Header />
         {renderGameData()}
         <div className={'flex flex-row items-center w-full h-auto border-b-2 divide-x-2 font-shabnam'} dir={'ltr'}>
            <div className={'flex items-center justify-center w-10/12 cursor-pointer h-14 '}></div>
            <div className={'flex items-center justify-center w-1/12 cursor-pointer h-14 '}>
               <div className={'flex items-center justify-center text-lg font-semibold text-white transform -rotate-45 bg-blue-800 border-4 border-yellow-300 rounded-full w-9 h-9'}>m</div>
               <span className={'z-10 ml-5 text-base text-black'}>{gameData.metacritic}</span>
            </div>
            <div className={'flex items-center justify-center w-1/12 cursor-pointer h-14 '}>
               <FiUser size={24} className={'z-10 text-gray-500 fill-current'} />
               <span className={'z-10 ml-5 text-base text-black'}>2k</span>
            </div>
         </div>
         <Card image={gameData.background_image} color={gameData.color} />
      </>
   );
};

export async function getServerSideProps({ params }) {
   const slug = params.slug;
   return {
      props: { slug }, // will be passed to the page component as props
   };
}

export default GamePage;
