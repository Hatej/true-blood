import React from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import SignInForm from './components/SignInForm'
import Home from './components/Home'
import ChooseLanguageForm from './components/ChooseLanguageForm'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {

  const [log, setIsLoggedIn] = React.useState({isLoggedIn: false, email:""})

  const [language, setLanguage] = React.useState("english")

  function logSet(isLoggedIn, email) {
    setIsLoggedIn({isLoggedIn: isLoggedIn, email: email})
  }

  function languageSet(language) {
    setLanguage(language)
  }

  return (
    <BrowserRouter>
      <Header log={log} logSet={logSet} language={language}/>
        <div className="App">
            <Switch>
              <Route exact path='/login'>
                <LoginForm logSet={logSet} language={language}/>
              </Route>
              <Route exact path='/signin'>
                <SignInForm language={language}/>
              </Route>
              <Route exact path='/'>
                <Home language={language}/>
              </Route>
              <Route exact path='/home'>
                <Home language={language}/>
              </Route>
              <Route exact path='/language'>
                <ChooseLanguageForm language={language} languageSet={languageSet}/>
              </Route>

            </Switch>
        
        </div>
    </BrowserRouter>
  );
}

export default App;
