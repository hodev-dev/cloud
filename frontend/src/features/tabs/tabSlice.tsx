import { createSlice } from '@reduxjs/toolkit';
import { FaBookReader, FaFolder, FaGamepad, FaHashtag, FaHome, FaStarOfLife, FaStore, FaYahoo } from 'react-icons/fa';

export const tabs = [
  {
    id: "Home",
    name: "Home",
    route: '/home',
    icon: FaHome,
    selected: true,
  },
  {
    id: "News",
    name: "News",
    route: '/news',
    icon: FaYahoo,
    selected: true,
  },
  {
    id: "Platform",
    route: '/platform',
    name: "Platform",
    icon: FaGamepad,
    selected: false,
  },
  {
    id: "Store",
    route: '/store',
    name: "Store",
    icon: FaStore,
    selected: false,
  },
  {
    id: "Collection",
    route: '/collection',
    name: "Collection",
    icon: FaFolder,
    selected: false,
  },
  {
    id: "Tag",
    route: '/tag',
    name: "Tag",
    icon: FaHashtag,
    selected: false,
  },
  {
    id: "Genre",
    route: '/genre',
    name: "Genre",
    icon: FaStarOfLife,
    selected: false,
  },
  {
    id: "Publisher",
    route: '/publisher',
    name: "Publisher",
    icon: FaBookReader,
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

export const findIdByName = (states: any, name: any) => {
  return states.find((state: any) => state.name === name);
}

export const { select } = tabsSlice.actions;
export const tabsSelector = (state: any) => state.tabs;

export default tabsSlice.reducer;
