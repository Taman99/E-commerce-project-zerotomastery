import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Hats Page </h1>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>  {/*  Routes must be wrapped between BrowserRouter */}
        <Switch> {/*  to open only one route with matching path */}
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />      
               
      {/*   Route path must match the url path to open resp. component */}
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
