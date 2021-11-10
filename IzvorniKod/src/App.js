import logo from './logo.svg';
import React from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import SignInForm from './components/SignInForm'
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {

  const [log, setIsLoggedIn] = React.useState({isLoggedIn: false, email:""})

  function logSet(isLoggedIn, email) {
    setIsLoggedIn({isLoggedIn: isLoggedIn, email: email})
  }

  return (
    <BrowserRouter>
      <Header log={log} logSet={logSet}/>
        <div className="App">
            <Switch>
              <Route exact path='/login'>
                <LoginForm logSet={logSet}/>
              </Route>
              <Route exact path='/signin'>
                <SignInForm/>
              </Route>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route exact path='/home'>
                <Home/>
              </Route>

            </Switch>
        
        </div>
    </BrowserRouter>
  );
}

export default App;
