import React from 'react';
import './App.css';
import Homepage from './Pages/HomePage/Homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import Header from './Components/Header/Header.component';
import SignIn_SignUp from './Pages/SignIn-SignUp/SignIn-SignUp.component';
import { getAuth, onAuthStateChanged } from '@firebase/auth';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount(){

    this.unsubscribeFromAuth = onAuthStateChanged(getAuth(), user => {
      this.setState({currentUser : user });
      console.log(user );
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>  {/*  Routes must be wrapped between BrowserRouter */}
          <Header currentUser={this.state.currentUser} />
          <Switch> {/*  to open only one route with matching path */}
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignIn_SignUp} />

            {/*   Route path must match the url path to open resp. component */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
