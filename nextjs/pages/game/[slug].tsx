import Card from '@components/Card';
import Header from '@components/Header';
import makeAxios from '@helper/makeAxios';
import { default as Link } from 'next/link';
import React from 'react';
import { FaAngleDown, FaCheckCircle, FaHeart, FaThumbsUp, FaUserAlt } from 'react-icons/fa';

const GamePage = ({ slug, game }) => {
   return (
      <div className={'w-full min-h-screen bg-black'}>
         <Header />
         <div className={'flex flex-row justify-center w-full h-full mt-4 bg-black'}>
            <Card threshold={4} image={game.background_image} color={game.color} />
            <div className={'flex flex-col items-center w-4/12 h-full'}>
               <div key={game.name} className={'flex flex-row justify-center w-full h-full bg-transparent rounded-md shadow-sm cursor-pointer'}>
                  <div className={'flex flex-col items-center w-full h-full '}>
                     <Link scroll={false} href={'/game/' + game.slug}>
                        <div className={'relative w-full h-auto rounded-md '} style={{ backgroundColor: game.color }}>
                           <img className={'object-cover w-full rounded-md shadow-lg h-96'} loading={'lazy'} alt={'img1'} src={'http://localhost:8000' + game.background_image} />
                           <div
                              style={{
                                 backgroundImage: `linear-gradient(to top, ${game.color} 16%, transparent 50%`,
                              }}
                              className={'absolute bottom-0 flex items-end justify-center w-full opacity-100 h-72 '}
                           >
                              <h1 className={'p-4 text-lg font-medium text-center text-white line-clamp-1'}>{game.name}</h1>
                           </div>
                        </div>
                     </Link>
                     <div className={'flex flex-row w-full h-14 rounded-b-md'} style={{ backgroundColor: game.color }}>
                        <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold '}>
                           <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                              <div className={'text-base text-center text-white transform -rotate-45 rounded-full w-7 h-7'}>m</div>
                              <span className={'z-10 ml-5 text-white'}>{game.metacritic}</span>
                           </div>
                        </div>
                        <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold '}>
                           <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                              <FaHeart size={14} className={'text-white fill-current'} />
                              <span className={'z-10 ml-5 text-white'}>{game.metacritic}</span>
                           </div>
                        </div>
                        <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold '}>
                           <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                              <FaUserAlt size={14} className={'text-white fill-current'} />
                              <span className={'z-10 ml-5 text-white'}>{'21K'}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={'flex flex-row w-full mt-4 bg-black border h-14 border-warmGray-900 rounded-t-xl'}>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold border-warmGray-900 border-r-1'}>
                     <FaCheckCircle size={20} className={'text-blue-600 fill-current '} />
                     <div className={'ml-4 text-warmGray-300'}>Follow</div>
                  </div>
                  <div className={'flex flex-row items-center justify-center w-1/2 h-auto font-semibold bg-black border-warmGray-900 border-r-1'}>
                     <FaThumbsUp size={20} className={'text-yellow-400 fill-current'} />
                     <div className={'ml-4 text-warmGray-300'}>Like</div>
                  </div>
               </div>
               <div className={'flex flex-row w-full h-auto p-4 overflow-hidden text-lg leading-8 bg-black border border-t-0 border-warmGray-900'}>
                  <div className={'flex items-center justify-center w-full h-auto font-semibold text-warmGray-300 line-clamp-6'}>{game.description}</div>
               </div>
               <div className={'flex flex-row w-full bg-black border border-t-0 h-14 border-warmGray-900 rounded-b-xl'}>
                  <div className={'flex items-center justify-center w-full cursor-pointer h-14'}>
                     <FaAngleDown size={19} className={'text-warmGray-300'} />
                     <span className={'z-10 ml-5 text-warmGray-300'}>{'More Info'}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export const getServerSideProps = async ({ params }) => {
   const Axios = makeAxios();
   const request = await Axios.get('/api/games/' + params.slug);
   const { data: game } = request;

   const slug = params.slug;

   return {
      props: { slug, game },
   };
};

export default GamePage;
