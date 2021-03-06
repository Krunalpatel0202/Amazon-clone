import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';


import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom'  
function App() {
const [{},dispatch] = useStateValue();

useEffect(() =>
{//only runs when app component loads..
auth.onAuthStateChanged(authUser => {
  console.log(`THE USER IS >>>`, authUser);
  if(authUser){
    //user just logged in or was logged in
    dispatch({
      type:'SET_USER',
      user: authUser
    })
  }
  else{
    //user logged out
    dispatch({
      type:'SET_USER',
      user:null
    })
  }
}

)
},[])

  return (
    //BEM
    <Router>
    <div className="App">
    
     <Switch>
       <Route path="/login">
         <Login />
       </Route>
     <Route path='/checkout'>
     <Header />
     <Checkout />
       
       </Route>
       <Route path='/'>
       <Header />
       <Home />

       </Route>
     
     </Switch>
    </div>
    
    </Router>
  );
}

export default App;
