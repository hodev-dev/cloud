import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  Route, Switch
} from "react-router-dom";
import Category from './ui/pages/category/Category';
// import { AuthState, selectAuth } from './features/auth/authSlice';
import Collection from './ui/pages/collection/Collection';
import Connect from "./ui/pages/Connect";
import Game from "./ui/pages/game/Game";
import News from "./ui/pages/news/News";
import PlatformGame from "./ui/pages/platform/PlatformGame";
import Publisher from './ui/pages/publisher/Publisher';
import Store from './ui/pages/store/Store';
import Tag from './ui/pages/tag/Tag';


function App() {
  // const authState: AuthState = useSelector(selectAuth);

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Connect} exact />
        <Route path="/game" component={Game} exact />
        <Route path="/news" component={News} exact />
        <Route path="/store" component={Store} exact />
        <Route path="/collection" component={Collection} exact />
        <Route path="/tag" component={Tag} exact />
        <Route path="/category" component={Category} exact />
        <Route path="/platform/:name/" component={PlatformGame} exact />
        <Route path="/publisher" component={Publisher} exact />
      </Switch>
    </Fragment>
  );
}

export default App;