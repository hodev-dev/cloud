import Card from '@components/Card';
import Header from '@components/Header';
import makeAxios from '@helper/makeAxios';
import { AxiosError, AxiosResponse } from 'axios';
import Img from 'next/image';
import { default as Link } from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaCheckCircle, FaThumbsUp, FaUserAlt } from 'react-icons/fa';
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
         // return (
         //    <div key={gameData.name} className={'relative flex flex-col justify-center object-fill w-full h-auto p-4 overflow-hidden'} dir={'rtl'} style={{ backgroundColor: gameData.color }}>
         //       <div
         //          className={'absolute w-full h-mostscreen filter blur-3xl mix-blend-soft-light'}
         //          style={{
         //             backgroundImage: `url(${'http://localhost:8000' + gameData.background_image})`,
         //             backgroundSize: 'cover',
         //             backgroundPosition: 'center top',
         //          }}
         //       ></div>
         //       <div className={'flex flex-row items-center justify-center w-full h-auto '}>
         //          <div className={'z-10 flex flex-col items-center justify-center w-1/6 bg-transparent rounded-md h-96'}>
         //             <img loading={'eager'} alt={'img1'} src={'http://localhost:8000' + gameData.background_image} className={'object-cover w-64 border-4 border-white rounded-md shadow-md h-72'} />
         //             <h1 className={'flex flex-wrap items-center justify-center w-10/12 h-12 text-lg font-medium text-center text-white break-words'}>{gameData.name_original}</h1>
         //          </div>
         //       </div>
         //    </div>
         // );
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
         <div className={'flex flex-row items-center w-full h-auto divide-x-2 border-b-1 font-shabnam'} dir={'ltr'}>
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
         <div className={'flex flex-row justify-center w-full h-full mt-4'}>
            <Card image={gameData.background_image} color={gameData.color} />
            <div className={'flex flex-col items-center w-4/12 h-full bg-white border'}>
               {gameStatus === GameDataStatus.IDLE && (
                  <Link href={'/game/' + gameData.slug} key={gameData.name}>
                     <div className={'flex flex-wrap w-full h-auto rounded-2xl'} dir={'rtl'}>
                        <div key={'img1'} className={'relative flex flex-col w-full h-auto bg-white shadow-sm cursor-pointer'} dir={'rtl'}>
                           <div className={'flex w-full h-auto '} style={{ backgroundColor: gameData.color }}>
                              <div className={'object-top w-full h-72'}>
                                 <Img className={'object-top'} loading={'lazy'} alt={'img1'} objectFit="cover" layout={'fill'} src={'http://localhost:8000' + gameData.background_image} />
                              </div>
                           </div>
                           <div
                              style={{
                                 backgroundImage: `linear-gradient(to top, ${gameData.color} 16%, transparent 50%`,
                              }}
                              className={'absolute top-0 flex items-end justify-center w-full opacity-100 h-72 '}
                           >
                              <h1 className={'p-4 font-medium text-center text-white text-md'}>{gameData.name}</h1>
                           </div>
                        </div>
                     </div>
                  </Link>
               )}
               <div className={'flex flex-row w-full h-14 border-b-1'}>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold border-r-1'}>
                     <FaCheckCircle className={'text-blue-500 fill-current'} />
                     <div className={'ml-2'}>Follow</div>
                  </div>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold border-r-1'}>
                     <FaThumbsUp className={'text-blue-500 fill-current'} />
                     <div className={'ml-2'}>Like</div>
                  </div>
               </div>
               <div className={'flex flex-row w-full h-auto p-2 overflow-hidden border-b-1'}>
                  <div className={'flex items-center justify-center w-full h-auto font-semibold line-clamp-6 '}>{gameData.description}</div>
               </div>
               <div className={'flex flex-row w-full h-14 border-b-1'}>
                  <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                     <FaAngleDown size={19} />
                     <span className={'z-10 ml-5 text-black'}>{'More Info'}</span>
                  </div>
               </div>
               <div className={'flex flex-row w-full h-14 '}>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold border-r-1'}>
                     <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                        <div className={'text-base text-center text-white transform -rotate-45 bg-gray-800 rounded-full w-7 h-7'}>m</div>
                        <span className={'z-10 ml-5 text-black'}>{gameData.metacritic}</span>
                     </div>
                  </div>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold border-r-1'}>
                     <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                        <FaThumbsUp size={19} className={'text-black fill-current'} />
                        <span className={'z-10 ml-5 text-black'}>{gameData.metacritic}</span>
                     </div>
                  </div>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold border-r-1'}>
                     <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                        <FaUserAlt size={19} className={'text-black fill-current'} />
                        <span className={'z-10 ml-5 text-black'}>{'21K'}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
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
