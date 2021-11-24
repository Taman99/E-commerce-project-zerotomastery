import React from 'react';
import './App.css';
import Homepage from './Pages/HomePage/Homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage.component';



function App() {
  return (
    <div className="App">
      <BrowserRouter>  {/*  Routes must be wrapped between BrowserRouter */}
        <Switch> {/*  to open only one route with matching path */}
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />    
               
      {/*   Route path must match the url path to open resp. component */}
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
