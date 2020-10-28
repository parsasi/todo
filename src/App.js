import React from 'react';
import './App.css';
import MainPage from './components/MainPage'
import { Switch , BrowserRouter as Router , Route , Link } from 'react-router-dom'
import ThemeContextProvider from './components/ThemeContextProvider'
import ThemeSwitchLogic from './components/ThemeSwitchLogic'
import Universities from './components/Universities'


function App(props) {
  return (
        <>
        <ThemeContextProvider>
        <ThemeSwitchLogic />
          <Router>
              <nav>
                <ul>
                  <li>
                    <Link className="navLink" to="/">Home</Link>
                  </li>
                  <li>
                    <Link className="navLink" to="/about">About</Link>
                  </li>
                  <li>
                    <Link className="navLink" to="/uni">Universities</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                  <Route path="/" exact>
                      <MainPage />
                  </Route>
                  <Route path="/about" exact>
                      <h1>About TodoMatic</h1>
                  </Route>
                  <Route path="/uni" exact>
                    <Universities />
                  </Route>
              </Switch>
          </Router> 
      </ThemeContextProvider>
      </>
  );
}

export default App;
