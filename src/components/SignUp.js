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
                    submit:''
            };
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event){
    const {target} =event;
    const value = target.value;
    const inputName = target.name;

    this.setState({
        [inputName]: value
    })

}

handleSubmit(event) {
    event.preventDefault();

    const {fname, lname, mname, dept, dob, mail, pass} = this.state;
    let data = {
        fname,
        lname,
        mname,
        dept,
        dob,
        mail,
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
        pass: ''
       
    })
}







    render() {
        return(
<React.Fragment>
                   <div className="container-fluid">
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
                    <input type="text" className="form-control"name="fname" value= {this.state.fname} onChange= {this.handleChange.bind(this)} placeholder="First-Name" required/>
                </div>
        <div className="form-group">
             <label htmlFor="lastname">Last Name:</label>
             <input type="text" className="form-control" name="lname" value= {this.state.lname} onChange= {this.handleChange.bind(this)} placeholder="Last-Name"  required/>
        </div>
        <div className="form-group">
    <label htmlFor="workdepartment"> Work Department</label>
    {/* <select className="form-control" name="dept" value= {this.state.dept} onChange= {this.handleChange.bind(this)} >
     
    <option selected disabled> Choose...</option>
    <option value="marketing">Marketing</option>
    <option value="HR">Human Resource</option>
    <option value="IT">IT Department </option>
    
    <option value="management">Management </option>
         </select> */}
         </div>
        
        <div className="form-group ">
             <label htmlFor="managersname">Manger's Name:</label>
             <input type="text" className="form-control" name="mname" value= {this.state.mname} onChange= {this.handleChange.bind(this)} placeholder="Manager-Name"  required/>
        </div>
        <div className="form-group ">
             <label htmlFor="age"> Age:</label>
             <input type="number" className="form-control" name="age" value= {this.state.fname} onChange= {this.handleChange.bind(this)} placeholder="Age"/>
        </div>
        <div className="form-group ">
             <label htmlFor="dob">D.O.B:</label>
             <input type="date" className="form-control" name="dob" value= {this.state.dob} onChange= {this.handleChange.bind(this)} placeholder="Date-of-Birth"/>
        </div>
        <div className="form-group ">
             <label htmlFor="email">Email</label>
             <input type="email" className="form-control" name="mail" value= {this.state.mail} onChange= {this.handleChange.bind(this)} placeholder="Email Address"/>
        </div>
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control" name="pass" value= {this.state.pass} onChange= {this.handleChange.bind(this)} placeholder="password"/>
        </div>
        <button type="button" className="btn btn-secondary btn-large" onClick={this.handleSubmit}>Create</button>

</form> 
                               
</div>
                </div>
                   
               </div>
                
            </div>
                    <div className="container-fluid">
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <a className="navbar-brand" href="#ggg">TimeOffManagement</a>
            </nav>
            </div>
</React.Fragment>
        );
    }
    
}


export default SignUp;