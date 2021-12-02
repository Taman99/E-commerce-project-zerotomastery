import React from 'react';
import './App.css';
import Homepage from './Pages/HomePage/Homepage.component';
import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import Header from './Components/Header/Header.component';
import SignIn_SignUp from './Pages/SignIn-SignUp/SignIn-SignUp.component';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { onSnapshot } from '@firebase/firestore';
import { createUserProfileDocumentInFirestore } from './Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/User.actions';

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(getAuth(), async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocumentInFirestore(userAuth);
        if (userRef) {
          onSnapshot(userRef, snapShot => {

            // this.setState({
            //   currentUser: {
            //     id : snapShot.id,
            //     ...snapShot.data()
            //   }
            // })
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })

          })
        }
      }
      else {
        // this.setState({currentUser : userAuth});
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>  {/*  Routes must be wrapped between BrowserRouter */}
          <Header />
          <Switch> {/*  to open only one route with matching path */}
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin'
              render={() => this.props.currentUser ?
                <Redirect to='/' /> : <SignIn_SignUp />
              } />

            {/*   Route path must match the url path to open resp. component */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
