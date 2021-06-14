import React from 'react'
import { FiArrowDown, FiCheck, FiCopy } from 'react-icons/fi'
import FlatButton from '../../../../../components/button/FlatButton'
import Navbar from '../../../../../components/Navbar/Navbar'
import NavbarCenterControl from '../../../../../components/Navbar/NavbarCenterControl'
import NavbarLeftControl from '../../../../../components/Navbar/NavbarLeftControl'
import NavbarRightControl from '../../../../../components/Navbar/NavbarRightControl'

const PasswordGenerator = (props: any) => {
  return (
    <div className={"relative flex flex-col items-center justify-center min-h-full -top-14 "}>
      <div className={"absolute top-0 w-full min-h-screen "}>
        <Navbar>
          <NavbarLeftControl>
            <FlatButton icon={FiCheck} />
            <FlatButton icon={FiCopy} />
          </NavbarLeftControl>
          <NavbarCenterControl>
            <div className={"text-sm font-semibold text-gray-500 select-none"}>
              Password Generator
            </div>
          </NavbarCenterControl>
          <NavbarRightControl>
            <FlatButton icon={FiArrowDown} onClick={() => props.setShowPasswordGenerator((prevState: boolean) => !prevState)} />
          </NavbarRightControl>
        </Navbar>
        <div className={"w-full text-sm cancel"}>
          <div className={"relative flex flex-col items-center justify-center overflow-hidden hover:overflow-y-auto"}>
            <div className={"flex flex-row items-center justify-center w-full h-24 text-base text-gray-500 bg-teal-100 border border-t-0"}>{"68Bv3Cvp5Ky8tnxArbrmV7BMWvdXKRd2FFNnRfnjF9C5KAJqKL2c4"} </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input className={"w-6/12 p-2 ml-40 text-sm text-center border rounded-l-sm outline-none h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="range" placeholder={"Name"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <div className={"text-gray-500"}>12</div>
                </div >
              </div>
            </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input disabled className={"w-6/12 p-2 ml-40 text-sm text-center bg-white border rounded-l-sm outline-none cancel h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Include Symbols:"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <input type={"checkbox"} checked />
                </div >
              </div>
            </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input disabled className={"w-6/12 p-2 ml-40 text-sm text-center bg-white border rounded-l-sm outline-none cancel h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Include Numbers:"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <input type={"checkbox"} checked />
                </div >
              </div>
            </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input disabled className={"w-6/12 p-2 ml-40 text-sm text-center bg-white border rounded-l-sm outline-none cancel h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Include Lowercase Characters:"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <input type={"checkbox"} checked />
                </div >
              </div>
            </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input disabled className={"w-6/12 p-2 ml-40 text-sm text-center bg-white border rounded-l-sm outline-none cancel h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Include Uppercase Characters:"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <input type={"checkbox"} checked />
                </div >
              </div>
            </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input disabled className={"w-6/12 p-2 ml-40 text-sm text-center bg-white border rounded-l-sm outline-none cancel h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Exclude Similar Characters:"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <input type={"checkbox"} checked />
                </div >
              </div>
            </div>
            <div className={"flex items-center justify-center w-full h-12 p-2 border border-t-0 border-l-0 border-r-0 bg-gray-50"}>
              <input disabled className={"w-6/12 p-2 ml-40 text-sm text-center bg-white border rounded-l-sm outline-none cancel h-9 disabled:bg-gray-100 focus:border-gray-700 focus:border-2"} type="text" placeholder={"Exclude Similar Characters:"} />
              <div className={"flex flex-row justify-start w-2/12 h-9 "}>
                <div onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className={`border flex  items-center justify-center w-9 h-9 ml-4 text-center bg-white  border-gray-300 rounded-md outline-none cursor-pointer select-none hover:bg-gray-50 hover:border-gray-500  ${(props.selected) ? '' : ''}`}>
                  <input type={"checkbox"} checked />
                </div >
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default PasswordGenerator
