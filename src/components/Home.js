import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class Home extends Component {
    render() {
        return(
            <React.Fragment>
            <section className="imgwrapper">
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                      <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                      <form className="form-inline">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LOGIN</button>
                      </form>
                </nav>
              </div>
                  <div className="container">
                    <div className="text">
                    <h2> TimeOff Management</h2>
                    <p> Open source, simple yet powerful absence management software for small and medium size business.</p>
                    <p>Endorsed by hundreds of software developers. </p>
                  </div>
                  
                  <Link className="btn btn-secondary buttonstyle" to='/signup'>SIGN UP</Link>
                  <a className="btn btn-secondary buttonstyle" href="#SignIn.js" role="button">SIGN IN</a>
        </div>
        </section> 

        
        <div className="container-fluid">
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <a className="navbar-brand" href="#rrr">TimeOffManagement</a>
            </nav>
            </div>
            </React.Fragment>   
            
        )
    }
}

export default Home;