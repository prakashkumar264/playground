import './exerciseone.css';
import React, { Component } from "react";

class exerciseone extends Component {
    render() {
      return (
        <div>
            <form>
                <label for="firstname">First Name : </label>
                <input type="text" id="firstname" name="firstname" /><br />
                <label for="lastname">Last Name : </label>
                <input type="text" id="lastname" name="lastname" /><br />
                <label for="gender">Gender : </label>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label><br />
                <label for="degree">Choose Your Degree : </label>
                <select id="degree" name="degree">
                    <option value="be">B.E.</option>
                    <option value="ms">M.S.</option>
                    <option value="phd">PhD</option>
                </select><br />
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" /><br />
                <label for="dob">Date of Birthday : </label>
                <input type="date" id="dob" name="dob" /><br />
                <label for="resume">Upload Resume  :  </label>
                <input type="file" id="resume" name="resume" /><br /><br />

                <input type="submit" value="Submit" />
            </form>

        </div>
      );
    }
  }
   
  export default exerciseone;