import { createSlice } from '@reduxjs/toolkit';
import { FaFolder, FaHashtag, FaHotjar, FaNewspaper, FaStarOfLife, FaStore } from 'react-icons/fa';

export const tabs = [
  {
    id: "Game",
    name: "داغ ترین ها",
    route: '/game',
    icon: FaHotjar,
    selected: true,
  },
  {
    id: "News",
    name: "اخبار",
    route: '/news',
    icon: FaNewspaper,
    selected: true,
  },
  {
    id: "Store",
    route: '/store',
    name: "قروشگاه ها",
    icon: FaStore,
    selected: false,
  },
  {
    id: "Category",
    route: '/category',
    name: "دسته بندی ها",
    icon: FaStarOfLife,
    selected: false,
  },
  {
    id: "Tag",
    route: '/Tag',
    name: "تگ ها",
    icon: FaHashtag,
    selected: false,
  },
  {
    id: "Collection",
    route: '/collection',
    name: "کالکشن ها",
    icon: FaFolder,
    selected: false,
  },
];

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState: tabs,
  reducers: {
    select: (states, action) => {
      states.forEach((state: any) => {
        if (state.id === action.payload) {
          state.selected = true;
        } else {
          state.selected = false;
        }
      });
    },
  }
});

export const findIdByName = (states: any, id: any) => {
  return states.find((state: any) => state.id === id);
}

export const { select } = tabsSlice.actions;
export const tabsSelector = (state: any) => state.tabs;

export default tabsSlice.reducer;
