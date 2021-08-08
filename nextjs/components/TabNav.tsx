import React from 'react';
import FlatNamedButton from '../components/button/FlatNamedButton';

const TabNav = (props: any) => {
   const renderTabs = () => {
      return props.tabsState.map((tab: any) => {
         return (
            <div className={'flex flex-wrap w-1/6 h-auto bg-blue-500'} key={tab.name.toString()}>
               <FlatNamedButton
                  to={tab.route}
                  shapeType={1}
                  icon={tab.icon}
                  name={tab.name}
                  border
                  selected={tab.selected}
                  iconColor={'text-gray-600'}
                  selectColor={'bg-red-500'}
                  selectBg={'bg-gray-100'}
               />
            </div>
         );
      });
   };

   return (
      <div className={'relative flex flex-col w-full h-auto bg-white md:w-full'} dir={'rtl'}>
         <div className={'flex flex-row flex-wrap w-full font-shabnam'}>{renderTabs()}</div>
      </div>
   );
};

export default TabNav;
