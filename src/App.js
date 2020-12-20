import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';

// Components and Pages
import Home from './pages/Home';
import GameDetail from './components/GameDetail'
import GlobalStyles from './components/GlobalStyles'

function App() {
  
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
      <GlobalStyles/>
      <Route path={["/game/:id", "/"]}>
        <Home/>
      </Route>
      {/* <Route path="games/:id">
        <GameDetail/>
      </Route>
       */}
    </div>
  );
}

export default App;
