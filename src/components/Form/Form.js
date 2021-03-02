import React, { useState } from 'react'
import './Form.scss'
import {Link} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import App from '../../App'


function Form({
    careerUrl,
    employeer,
    gradYear,
    startYear,
    jobTitle,
    specialization,
    universityName,
    setCareerUrl,
    setemployeer,
    setgradYear,
    setstartYear,
    setjobTitle,
    setspecialization,
    setuniversityName,
    handleFormSubmit
}){


    function handeforDisable(){
        let emplen = employeer.length
        if(emplen>=2 && emplen<=20){
            return false
        }

        return true
        
    }




    return(
        <div>
    <div id='newRecordForm'> 
  
            <div>
            <label>Career_Url</label>
                <input id='car' type="text" onChange={(e)=>setCareerUrl(e.target.value)} value={careerUrl}></input>
                {careerUrl}
            </div>
            <div>
            <label>Employer</label>
            <input type="text" onChange={(e)=>setemployeer(e.target.value)} value={employeer}></input>
                {employeer}
            </div>
            <div>
            <label>Graduation Year</label>
            <input type="number" onChange={(e)=>setgradYear(e.target.value)} value={gradYear}></input>
                {gradYear}
            </div>
            <div>
            <label>Start Year</label>
            <input type="number" onChange={(e)=>setstartYear(e.target.value)} value={startYear}></input>
                {startYear}
            </div>
            <div>
            <label>Job_Title</label>
            <input type="text" onChange={(e)=>setjobTitle(e.target.value)} value={jobTitle}></input>
                {jobTitle}
            </div>
            <div>
            <label>Specialization</label>
            <input type="text" onChange={(e)=>setspecialization(e.target.value)} value={specialization}></input>
                {specialization}
            </div>
            <div>
              
            <label>University Name</label>
            <input type="text" onChange={(e)=>setuniversityName(e.target.value)} value={universityName}></input>
                {universityName}
            </div>

           <button type='submit' id='newRecordBtn' disabled={handeforDisable()} onClick={()=>handleFormSubmit()}>Submit Data</button>
           
           
          
    </div>
    </div>

    )
}

export default Form