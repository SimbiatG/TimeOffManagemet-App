import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

class SignUp extends Component{
    constructor(props){
        super(props);

            this.state = {
                    fname: '',
                    lname: '',
                    mname: '',
                    dept: '',
                    dob: '',
                    mail: '',
                    pass: '',
                    age: '',
                    cpass: '',
                    submit:''
            };
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event){
    const {target} =event;
    const value = target.value;
    const inputName = target.name;
    if(inputName == 'fname' || inputName == 'lname' || inputName == 'mname' || inputName == 'dept' ){
        var alphaExp = /^[a-zA-Z]+$/;
        if(!value.match(alphaExp)){
            alert('enter a valid name')
        }
    }
    else if(inputName == 'mail'){
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

    const {fname, lname, mname, dept, dob, mail, pass, age, cpass} = this.state;
    let data = {
        fname,
        lname,
        mname,
        dept,
        dob,
        mail,
        age,
        cpass,
        pass
    }
    console.log(data);
    this.setState({
        fname: '',
        lname: '',
        mname: '',
        dept: '',
        dob: '',
        mail: '',
        age: '',
        cpass:'',
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
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LOGIN</button>
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
            <form className="formstyle">
                <div className="form-group ">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" pattern="/^[a-zA-Z]+$/" className="form-control"name="fname" value= {this.state.fname} onChange= {this.handleChange.bind(this)} required/>
                </div>
        <div className="form-group">
             <label htmlFor="lastname">Last Name:</label>
             <input type="text" className="form-control" name="lname" value= {this.state.lname} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group">
    <label htmlFor="workdepartment"> Work Department</label>
    <input type="text" className="form-control" name="dept" value= {this.state.lname} onChange= {this.handleChange.bind(this)}  required/>
  </div>
        
        <div className="form-group ">
             <label htmlFor="managersname">Manger's Name:</label>
             <input type="text" className="form-control" name="mname" value= {this.state.mname} onChange= {this.handleChange.bind(this)} required/>
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
             <input type="password" className="form-control" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." required name="pass" value= {this.state.pass} onChange= {this.handleChange.bind(this)}/>
        </div>
        <div className="form-group">
             <label htmlFor="confirmpassword"> Confirm Password:</label>
             <input type="password" className="form-control" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." required name="cpass" value= {this.state.pass} onChange= {this.handleChange.bind(this)}/>
        </div>
        <button type="button" className="btn btn-secondary btn-large" onClick={this.handleSubmit}>Create</button>

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