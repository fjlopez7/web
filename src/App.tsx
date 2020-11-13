import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './graphql/Client'
import PageNotFound from './components/NotFound';
import { PlayList } from './views/PlayList';
import { PlaybookList } from './views/PlaybookList';
import { Play } from './views/Play';
import { Playbook } from './views/Playbook';
import Profile from './components/Profile';
import NewPlay from './components/PlayEditor';
import {NewPlaybook} from './components/NewPlayBook';
import {EditPlaybook} from './components/EditPlayBook';
import Review from './components/Review';
import Navbar from './components/NavBar';
import {Login} from './views/Login';
import {SingUp} from './views/SingUp';
import NavbarStart from './components/NavBarStart';

function App() {

  const isLoggedIn = useSelector((state: any) => {
    return state.user.isLoggedIn
  });
  
  return (
    <ApolloProvider client={client}>
      <Router>
      {isLoggedIn? <Redirect to="/plays"/> : <Redirect to="/login"/>}
        {isLoggedIn ?  (
          <Navbar/> 
        ): <NavbarStart/>}

        <div className='container'>
        <Switch>
          <Route exact path="/plays"  component={PlayList}/>
          <Route exact path="/playbooks"  component={PlaybookList}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/createplay" component={NewPlay}/>
          <Route exact path="/createplaybook" component={NewPlaybook}/>
          <Route exact path="/review" component={Review}/>
          <Route exact path="/login"  component={Login}/>
          <Route exact path="/singup"  component={SingUp}/>
          <Route exact path="/play/:id"  component={Play}/>
          <Route exact path="/playbook/:id"  component={Playbook}/>
          <Route exact path="/editplaybook/:id"  component={EditPlaybook}/>
          <Route component={PageNotFound}/>
        </Switch>
        </div>
      </Router>
    </ApolloProvider>  
  );
}
export default App;