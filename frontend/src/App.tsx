import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  Route, Switch
} from "react-router-dom";
// import { AuthState, selectAuth } from './features/auth/authSlice';
import Collection from './ui/pages/collection/Collection';
import Connect from "./ui/pages/Connect";
import Genre from './ui/pages/genre/Genre';
import Home from "./ui/pages/home/Home";
import News from "./ui/pages/news/News";
import Platform from './ui/pages/platform/Platform';
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
        <Route path="/home" component={Home} exact />
        <Route path="/news" component={News} exact />
        <Route path="/platform" component={Platform} exact />
        <Route path="/store" component={Store} exact />
        <Route path="/collection" component={Collection} exact />
        <Route path="/tag" component={Tag} exact />
        <Route path="/genre" component={Genre} exact />
        <Route path="/publisher" component={Publisher} exact />
      </Switch>
    </Fragment>
  );
}

export default App;