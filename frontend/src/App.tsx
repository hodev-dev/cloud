import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route, Switch, useLocation
} from "react-router-dom";
import { animated, useTransition } from 'react-spring';
import { findIdByName, select, tabs, tabsSelector } from "./features/tabs/tabSlice";
// import { AuthState, selectAuth } from './features/auth/authSlice';
import Collection from './ui/pages/collection/Collection';
import Connect from "./ui/pages/Connect";
import Genre from './ui/pages/genre/Genre';
import Home from "./ui/pages/home/Home";
import Platform from './ui/pages/platform/Platform';
import Publisher from './ui/pages/publisher/Publisher';
import Store from './ui/pages/store/Store';
import Tag from './ui/pages/tag/Tag';


function App() {
  // const authState: AuthState = useSelector(selectAuth);
  const location = useLocation();

  const dispatch = useDispatch();
  const _tabsState = useSelector(tabsSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Home");
    dispatch(select(tab.id));
  }, [dispatch])

  const transition = useTransition(location, {
    config: { duration: 300 },
    expires: true,
    trail: 350,
    enter: (item: any) => [
      { opacity: 1, transform: "translate(0%,0)" },
    ],
    leave: (item: any) => async (next, cancel) => {
      await next({ overflow: "hidden", opacity: 0, transform: "translate(-100%,0%) " })
    },
    from: { opacity: 0.25, transform: "translate(100%,0%)" }
  });

  return (
    <Fragment>
      {transition((props, item) => (
        <animated.div style={props}>
          <Switch location={item}>
            <Route path="/" component={Connect} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/platform" component={Platform} exact />
            <Route path="/store" component={Store} exact />
            <Route path="/collection" component={Collection} exact />
            <Route path="/tag" component={Tag} exact />
            <Route path="/genre" component={Genre} exact />
            <Route path="/publisher" component={Publisher} exact />
          </Switch>
        </animated.div>
      ))
      }
    </Fragment>
  );
}

export default App;