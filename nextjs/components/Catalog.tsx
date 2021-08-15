import Link from 'next/link';
import React from 'react';
import { FaHeart, FaUserAlt } from 'react-icons/fa';

const Catalog = ({ games }) => {
   return (
      games &&
      games.map((game) => {
         return (
            <div key={game.name} className={'flex flex-row justify-center w-full h-full bg-transparent rounded-md shadow-sm cursor-pointer'}>
               <div className={'flex flex-col items-center w-full h-auto '}>
                  <Link scroll={false} href={'/game/' + game.slug}>
                     <div className={'relative w-full h-auto rounded-md shadow-xl'} style={{ backgroundColor: game.color }}>
                        <img className={'object-cover w-full rounded-md shadow-xl h-96'} loading={'eager'} alt={'img1'} src={'http://localhost:8000' + game.background_image} />
                        <div
                           style={{
                              backgroundImage: `linear-gradient(to top, ${game.color} 16%, transparent 50%`,
                           }}
                           className={'absolute bottom-0 flex items-end justify-center w-full opacity-100 h-72 '}
                        >
                           <h1 className={'p-4 text-sm font-medium text-center text-white line-clamp-1'}>{game.name}</h1>
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
         );
      })
   );
};

export default Catalog;
