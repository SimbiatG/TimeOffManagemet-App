import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';



class SignUp extends Component{
    constructor(props){
        super(props);

            this.state = {
                initialState : {
                    fname: '',
                    lname:'',
                    mname:'',
                    dept:'',
                    dob:'',
                    mail:'',
                     pass: '',
                     lnameError:'',
                     fnameError:'',
                     mnameError:'',
                     deptError:''
                     
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
   let lnameError ="";
    let fnameError = "";
    let mnameError = "";
    let deptError = "";

    var nameExp = /^[a-zA-Z]+$/;

    
    if(!this.state.fname.match(nameExp)){
        fnameError = "Please use letters only" 
    }

    if(!this.state.lname.match(nameExp)){
        lnameError = "Please use letters only" 
    }

    if(!this.state.mname.match(nameExp)){
        mnameError = "Please use letters only" 
    }
    if(!this.state.dept.match(nameExp)){
        deptError = "Please use letters only"  
    }



    if (fnameError || lnameError  || mnameError  || deptError){
        this.setState({ fnameError, lnameError, mnameError, deptError});
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
};  render() {
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
<div className="container">
    <div className="row">
            <div className="col-md-5">
                <h3 className="heading"> TimeOff Management </h3>
               
                        <div className="imagewrapper">
                            
                        </div>
            </div>

                <div className="col-md-7">
                    
                        <h3 className="heading"> Employee Details </h3>
                    
                    <div className="formpart">
            <form  onSubmit={this.handleSubmit} className="formstyle">
                <div className="form-group ">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text"  required className="form-control"name="fname"  value= {this.state.fname} onChange= {this.handleChange.bind(this)}/>
                    <div style={{color:"red"}}> {this.state.fnameError} </div>
                </div>
        <div className="form-group">
             <label htmlFor="lastname">Last Name:</label>
             <input type="text" className="form-control" name="lname" value= {this.state.lname} onChange= {this.handleChange.bind(this)} required/>
             <div style={{color:"red"}}> {this.state.lnameError} </div>
        </div>
        <div className="form-group">
    <label htmlFor="workdepartment"> Work Department</label>
    <input type="text" className="form-control" name="dept" value= {this.state.dept} onChange= {this.handleChange.bind(this)}  required/>
    <div style={{color:"red"}}> {this.state.deptError} </div>
</div>
        
        <div className="form-group ">
             <label htmlFor="managersname">Manger's Name:</label>
             <input type="text" className="form-control" name="mname" value= {this.state.mname} onChange= {this.handleChange.bind(this)} required/>
             <div style={{color:"red"}}> {this.state.mnameError} </div>
        </div>
        <div className="form-group ">
             <label htmlFor="age"> Age:</label>
             <input type="number" className="form-control" name="age" value= {this.state.age} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group ">
             <label htmlFor="dob">D.O.B:</label>
             <input type="date" className="form-control" name="dob" value= {this.state.dob} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group ">
             <label htmlFor="email">Email</label>
             <input type="email"  className="form-control" name="mail" value= {this.state.mail} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control"  required name="pass" value= {this.state.pass} onChange= {this.handleChange.bind(this)}/>
        </div>
        <div className="form-group">
             <label htmlFor="confirmpassword"> Confirm Password:</label>
             <input type="password" className="form-control"  required name="cpass" value= {this.state.cpass} onChange= {this.handleChange.bind(this)}/>
        </div>
        <button type="submit" className="btn btn-secondary btn-large" >Create</button>

</form> 
                               
</div>
                </div>
                   
               </div>
                
            </div>
                    <div className="container-fluid">
            <nav className="navbar fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
            </nav>
            </div>
</React.Fragment>
        );
    }
    
}


export default SignUp;