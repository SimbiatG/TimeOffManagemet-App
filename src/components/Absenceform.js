import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Absenceform.css';


class Absenceform extends Component {

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
          selectedDay: undefined,
        };
      }
      handleDayChange(day) {
        this.setState({ selectedDay: day });
      }

    render(){
        const { selectedDay } = this.state;
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

                     <h3 className="header"> Please Fill The Absence Request Form </h3>

                     <div className="pagelayout">
                     <div class="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01"> Type Of Leave</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
  <option selected></option>
    <option value="1"> Sick Leave </option>
    <option value="2">Maternity Leave </option>
    <option value="3">Paternity Leave</option>
    <option value="3"> Holiday Leave</option>
    </select>
</div>

                <div className="row">

                <div className="col-md-4">
                <div>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p> From </p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
                </div>

                <div className="col-md-4">
                <div>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p> To </p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
</div>

<div className="col-md-4">
<div className="form-group">
    <label for="formGroupExampleInput"> </label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Duration"/>
  </div>
</div>

              </div>



                        <form>
                        <div class="form-group">
    <label for="exampleFormControlTextarea1">  </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Reasons for Leave" rows="6"></textarea>
  </div>

  <button type="submit" className="btn btn-secondary btn-large "> Submit </button>
                        </form>

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


export default Absenceform;