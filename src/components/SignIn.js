import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

class SignIn extends Component{
     constructor(props){
        super(props);


            this.state = {
                initialState : {
                    email: '',
                    fullname:'',
                     pass: '',
                     emailError: '',
                     fullnameError:'',
                     passError:''
                }
            };
                 
           
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event){
    const isCheckbox = event.target.type === "checkbox;"
    this.setState({
        [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
    });

}

            validate = () => {
                let fullnameError = "";
                let emailError = "";
                // let passError = "";
                var fnameExp = /^[a-zA-Z]+$/;

                
                if(!this.state.fullname.match(fnameExp)){
                    fullnameError = "Please use letters only" 
                }

                if(!this.state.email){
                    emailError = "invalid email"
                }

                if (emailError || fullnameError){
                    this.setState({ emailError, fullnameError});
                    return false;
                }
                return true;
            };






handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid){
        console.log(this.state);
        this.setState(this.state)
    }
};

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
                
                <form onSubmit={this.handleSubmit}>

                <div className="form-group ">
             <label htmlFor="name"> Full-Name:</label>
             <input type="text" className="form-control" required name="fullname"  value={this.state.fullname} onChange={this.handleChange.bind(this)} placeholder="Full-Name"/>
                    <div style={{color:"red"}}> {this.state.fullnameError} </div>
        </div>
                    <div className="form-group ">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" required name="email"  value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Email Address"/>
            
        </div>
        
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control" name="pass" required placeholder="password"/>
            
        </div>
        

        {/* <button type="button" > SIGN IN </button> */}
        <button type="submit" className="btn btn-secondary btn-large signinbutton">SIGN IN </button>
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