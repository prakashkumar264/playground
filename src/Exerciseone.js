import './exerciseone.css';
import React, { Component } from "react";

class Exerciseone extends Component {
    render() {
      return (
        <div style={{margin:'auto'}}>
            <form>
              <table>
                <thead>
                  <tr>
                    <th />
                    <th />
                  </tr>
                </thead>
               <tbody>
               <tr>
                  <td> <label htmlFor="firstname">First Name : </label></td>
                  <td><input type="text" id="firstname" name="firstname" maxLength="128" /></td>
                </tr>
                <tr>
                  <td>   <label htmlFor="lastname">Last Name : </label></td>
                  <td>  <input type="text" id="lastname" name="lastname"  maxLength="128"  /></td>
                </tr>
                <tr>
                  <td>   <label htmlFor="gender">Gender : </label></td>
                  <td>  
                    <input type="radio" id="male" name="gender" value="male" /> 
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                  </td>
                </tr>
                <tr>
                  <td>  <label htmlFor="degree">Choose Your MS Field : </label></td>
                  <td>
                      <select id="field" name="field">
                        <option defaultValue value="cs">Computer Science</option>
                        <option value="electrical">Electrical</option>
                        <option value="instrumentation">Instrumentation</option>
                        <option value="civil">Civil</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>  <label htmlFor="email">Email: </label></td>
                  <td>  <input type="email" id="email" name="email"  /* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" */ /></td>
                </tr>
                <tr>
                  <td> <label htmlFor="dob">Date of Birthday : </label></td>
                  <td>  <input type="date" id="dob" name="dob" min="1900-01-01" max="2121-01-01" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="resume">Upload Resume  :  </label></td>
                  <td>
                <input type="file" id="resume" name="resume" /></td>
                </tr>
             
               </tbody>
              </table>
                <input type="submit" value="Submit" />
            </form>

        </div>
      );
    }
  }
   
  export default Exerciseone;
