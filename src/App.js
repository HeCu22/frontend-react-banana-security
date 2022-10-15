import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {AuthContext} from "./context/AuthContext";
import './App.css';

function App() {
  // uitlezen context met usecontext
  const {isAuth} = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="content">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>


          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route path="/profile">
            {isAuth ? <Profile /> : <Redirect to="/SignIn" />}
            {/*<Profile />*/}
          </Route>

        </Switch>
      </div>
    </>
  );
}

export default App;
