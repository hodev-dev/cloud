import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { AuthState, selectAuth } from './features/auth/authSlice';
import ProtectedRoute from './helper/ProtectedRoute';
import Connect from "./ui/pages/Connect";
import Home from "./ui/pages/home/Home";

function App() {
  const authState: AuthState = useSelector(selectAuth);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Connect} exact />
        <ProtectedRoute isLoading={(authState.status === 'loading') ? true : false} isLoggedIn={authState.isLoggedIn}>
          <Route path="/user" component={Home} exact />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;