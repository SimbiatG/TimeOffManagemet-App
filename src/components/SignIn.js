import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

class SignIn extends Component{

    constructor(props){
        super(props);

            this.state = {
                   email: '',
                    pass: ''
                  
            };
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event){
    const {target} =event;
    const value = target.value;
    const inputName = target.name;
    if(inputName == 'email'){
         var emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!value.match(emailExp)){
            alert('enter a valid Email')
        };
    }       
   


    this.setState({
        [inputName]: value
    })

}

handleSubmit(event) {
    event.preventDefault();

    const {email, pass, cpass} = this.state;
    let data = {
       email,
       
        pass
    }
    console.log(data);
    this.setState({
         email: '',
       
        pass: ''
       
    })
}

render() {
            return(
    <React.Fragment>
  <div className="container-fluid" style={{padding:"0px"}}>
           <nav className="navbar navbar-light bg-light">
                      <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                      <form className="form-inline">
                      <Link className="btn btn-outline-success my-2 my-sm-0"  to='/'> HOME </Link>
                      </form>
                </nav>
    </div>

                <div className="bgpicture">
    
            <div className="container">
            <h3 className="heading"> Please Enter Your Login Details </h3>
            <div className="pageform">
                <form>
                    <div className="form-group ">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" name="email"  value={this.state.mail} onChange={this.handleChange.bind(this)} placeholder="Email Address"/>
        </div>
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control" name="pass"  placeholder="password"/>
        </div>

        {/* <button type="button" onClick={this.handleSubmit}> SIGN IN </button> */}
        <Link  className="btn btn-secondary btn-large signinbutton" to='/dashboard'>SIGN IN</Link>
                </form>
            </div>
    </div>

</div>
        <div className="container-fluid"  style={{padding:"0px"}}>
            <nav className="navbar  fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
            </nav>
            </div>

    </React.Fragment>
                        


            )
    }

}



export default SignIn;