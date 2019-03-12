import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class Home extends Component {
    render() {
        return(
            <React.Fragment>
            <div className="container-fluid" style={{padding:"0px"}}>
           <nav className="navbar navbar-light bg-light">
                      <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                      <form className="form-inline">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LOGIN</button>
                      </form>
                </nav>
              </div>
              <section className="imgwrapper">
                  <div className="container">
                    <div className="text">
                    <h2> TimeOff Management</h2>
                    <p> Open source, simple yet powerful absence management software for small and medium size business.</p>
                <p>Endorsed by hundreds of software developers. </p>
                  </div>
                  
                  <Link className="btn btn-secondary buttonstyle" to='/signup'>SIGN UP</Link>
                  <Link className="btn btn-secondary buttonstyle" to='/signin'>SIGN IN</Link>
        </div>
        </section> 

        
        <div className="container-fluid">
            <nav className="navbar fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
            </nav>
            </div>
            </React.Fragment>   
            
        )
    }
}

export default Home;