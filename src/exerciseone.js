import './exerciseone.css';
import React, { Component } from "react";

class exerciseone extends Component {
    render() {
      return (
        <div>
            <form>
              <table>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td> <label for="firstname">First Name : </label></td>
                  <td><input type="text" id="firstname" name="firstname" maxLength="128" /></td>
                </tr>
                <tr>
                  <td>   <label for="lastname">Last Name : </label></td>
                  <td>  <input type="text" id="lastname" name="lastname"  maxLength="128"  /></td>
                </tr>
                <tr>
                  <td>   <label for="gender">Gender : </label></td>
                  <td>  
                    <input type="radio" id="male" name="gender" value="male" /> 
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>
                  </td>
                </tr>
                <tr>
                  <td>  <label for="degree">Choose Your MS Field : </label></td>
                  <td>
                      <select id="field" name="field">
                        <option value="cs">Computer Science</option>
                        <option value="electrical">Electrical</option>
                        <option value="instrumentation">Instrumentation</option>
                        <option value="civil">Civil</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>  <label for="email">Email: </label></td>
                  <td>  <input type="email" id="email" name="email"  /* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" */ /></td>
                </tr>
                <tr>
                  <td> <label for="dob">Date of Birthday : </label></td>
                  <td>  <input type="date" id="dob" name="dob" max="2021-01-01" /></td>
                </tr>
                <tr>
                  <td><label for="resume">Upload Resume  :  </label></td>
                  <td>
                <input type="file" id="resume" name="resume" /></td>
                </tr>
              </table>
                <input type="submit" value="Submit" />
            </form>

        </div>
      );
    }
  }
   
  export default exerciseone;