import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findIdByName, select, tabs, tabsSelector } from '../../../features/tabs/tabSlice';
import makeAxios from '../../../helper/makeAxios';
import Header from '../../partials/Header';


const Home = () => {
  const [games, setGames] = useState([]);

  const dispatch = useDispatch();
  const _tabsState = useSelector(tabsSelector);
  const Axios = makeAxios();

  useEffect(() => {
    const tab = findIdByName(tabs, "Home");
    dispatch(select(tab.id));
  }, [dispatch])

  useEffect(() => {
    const request = Axios.get('/api/games/');
    request.then((response: AxiosResponse) => {
      console.log(response.data);
      setGames(response.data);
    }).catch((error: AxiosError) => {
      console.log(error.message);
    });
  }, [])

  const renderGames = () => {
    return games.map((game: any) => {
      return (
        <div key={game.id} className={"flex flex-wrap w-2/12 h-auto "} dir={"rtl"}>
          <div key={"img1"} className={"relative flex flex-col w-full h-auto bg-white rounded-sm shadow-sm cursor-pointe"} dir={"rtl"}>
            <div className={"flex w-full h-auto "}>
              <img alt={'img1'} className={"object-cover w-full rounded-sm h-96"} src={"http://localhost:8000" + game.background_image} />
            </div>
            <div style={{ backgroundImage: `linear-gradient(to top, ${game.color} 16%, transparent 50%` }} className={"absolute top-0 flex items-end justify-center w-full rounded-sm opacity-100 h-96 "} >
              <h1 className={"p-4 font-medium text-center text-white text-md"}>{game.name}</h1>
            </div>
          </div>
        </div>
      )
    });
  }

  return (
    <>
      <Header tabsState={_tabsState} />
      <div className={"relative flex flex-row flex-wrap w-full h-auto bg-white"}>
        {renderGames()}
      </div>
    </>
  )
}

export default Home

