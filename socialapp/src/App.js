import React from 'react'
import { Route, Switch } from 'react-router';
import Login from './components/LoginComponent/Login'
import SignUp from './components/SignUpComponent/SignUp'
import Home from './components/Home/Home'
import UserProfile from './components/UserProfile/UserProfile'
import ChatSection from './components/ChatComponent/ChatSection'
import './App.css';
import NavHeader from './components/NavHeader/NavHeader';


function App() {
  return (
    <>
    
      <Switch>
         <Route path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp}/>
         <NavHeader>
         <Route exact path="/" component={Home} />
        <Route path="/user/:userId" render={({history, match})=>
         <UserProfile
         userId={match.params.userId}/>} />
         <Route path="/chat" component={ChatSection}/>
         </NavHeader>

      </Switch>

      </>
  );
}

export default App;
 