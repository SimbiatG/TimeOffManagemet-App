import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUp} />
            </div>


          </BrowserRouter>
     
    );
  }
}

export default App;
