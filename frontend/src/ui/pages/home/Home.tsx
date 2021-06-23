import Img1 from '../../assets/img/img1.jpg';
import Img2 from '../../assets/img/img2.jpg';
import Img3 from '../../assets/img/img3.jpg';


const Home = () => {

  const renderGames = () => {
    return (
      <div className={"flex flex-wrap w-full h-auto "} dir={"rtl"}>
        <div key={"img1"} className={"relative flex flex-col w-2/12 h-auto bg-white rounded-sm shadow-sm cursor-pointe"} dir={"rtl"}>
          <div className={"flex w-full h-auto "}>
            <img alt={'img1'} className={"object-cover w-full rounded-sm h-96"} src={Img1} />
          </div>
          <div className={"absolute top-0 flex items-end justify-center w-full rounded-sm opacity-100 h-96 bg-gradient-to-t via-transparent from-blue-700 to-transparent "} >
            <h1 className={"p-4 font-medium text-left text-white text-md"}>Prince of Persia: The Sands of Time Remake</h1>
          </div>
        </div>
        <div key={"img2"} className={"relative flex flex-col w-2/12 h-auto bg-white rounded-sm shadow-sm cursor-pointe"} dir={"rtl"}>
          <div className={"flex w-full h-auto "}>
            <img alt={'img2'} className={"object-cover w-full rounded-sm h-96"} src={Img2} />
          </div>
          <div className={"absolute top-0 flex items-end justify-center w-full rounded-sm opacity-100 h-96 bg-gradient-to-t via-transparent from-rose-700 to-transparent "} >
            <h1 className={"p-4 font-medium text-left text-white text-md"}>Red Dead Redemption 2</h1>
          </div>
        </div>
        <div key={"img3"} className={"relative flex flex-col w-2/12 h-auto bg-white rounded-sm shadow-sm cursor-pointe"} dir={"rtl"}>
          <div className={"flex w-full h-auto "}>
            <img alt={'img3'} className={"object-cover w-full rounded-sm h-96"} src={Img3} />
          </div>
          <div className={"absolute top-0 flex items-end justify-center w-full rounded-sm opacity-100 h-96 bg-gradient-to-t via-transparent from-gray-700 to-transparent "} >
            <h1 className={"p-4 font-medium text-left text-white text-md"}>The Elder Scrolls V: Skyrim</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={"relative flex flex-col w-full h-screen bg-white"}>
      {renderGames()}
    </div>
  )
}

export default Home
