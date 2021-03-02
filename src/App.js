import React, {Fragment, useEffect, useState} from 'react'
import './App.css';
import './beststyles.scss'
import data from './Student_Data.json'
import Card from './components/Card/Card'
import  {v4 as uuidv4} from 'uuid'
import { func } from 'prop-types';
import Form from './components/Form/Form'
import {Link} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";

const uuidData = data.map(i=>{
    return{
      ...i,
      Id: uuidv4()
    }
})

function App() { 


  const[careerUrl,setCareerUrl]=useState("")
  const[employeer,setemployeer]=useState("")
  const[gradYear,setgradYear]=useState("")
  const[startYear,setstartYear]=useState("")
  const[jobTitle,setjobTitle]=useState("")
  const[specialization,setspecialization]=useState("")
  const[universityName,setuniversityName]=useState("")
  const[fav,setFav] = useState([])
  const[data,setData] = useState([])
  const[deletedRecords,setDeletedRecords] =useState([])
 
  function removeAllFav(){
    return setFav([])
  }

  function getFavs(){
    let empData=  uuidData.filter(i=>{
        return fav.includes(i.Id) 
      })
    let returnEmployerName = empData.map(i=>i.Employer)
    return returnEmployerName.join(",")
  }
  
  function deleteRecord (Id) {
    let deletedRecord= data.filter((i)=>{
     return i.Id ===Id 
    })

    let  copyDelRecords=[...deletedRecords]
    copyDelRecords.push(deletedRecord[0])
    setDeletedRecords(copyDelRecords)
    let remainingRecord= data.filter((i)=>{
        return i.Id !==Id 
       })   
    setData(remainingRecord)
    }


  useEffect(()=>{
    setData(uuidData)
  },[])

  function retrieveDeleted() {
    console.log(data.length, 'Before Retrive')
    let mergedRecords=[...data,...deletedRecords]
    setData(mergedRecords)
    setDeletedRecords([])
    console.log(data.length, 'After Retrive')
  }



  function handleFormSubmit(){
    let objReady ={
        "Career_Url": careerUrl,
        "Employer":  employeer,
       "Graduation":  gradYear,
        "StartYear":  startYear,
       "Job_Title":  jobTitle,
       "Specialization": specialization,
       "University": universityName,
        "Id":uuidv4()
    }
    let newData = [objReady,...data]
    setData(newData)
    



    document.getElementById('newRecordBtn').disabled = true;
    setTimeout(function(){document.getElementById('newRecordBtn').disabled = false;},3000);
}


     const univName =data.map(i=>{
       const{Employer, Career_Url, Job_Title, Id} = i
       return(

        
        <Card 

          Career_Url={Career_Url}
          Employer={Employer}
          Job_Title={Job_Title}
          key={Id}
          setFav={setFav}
          fav={fav}
          Id={Id}
          deleteRecord={deleteRecord}
         
        />
       )
     }

     )

  return (

    
    <div>
     Here are your fav companies
     {data.length}
              
  
      
    <div>
      <div> {`Total Record Delete:::  ${data.length}`}</div>
     <div>  {`Record Deleted:::  ${deletedRecords.length}`}</div>
     <div>
       <Form

        careerUrl={careerUrl}
        employeer={employeer}
        gradYear={gradYear}
        startYear={startYear}
        jobTitle={jobTitle}
        specialization={specialization}
        universityName={universityName}
        setCareerUrl={setCareerUrl}
        setemployeer={setemployeer}
        setgradYear={setgradYear}
        setstartYear={setstartYear}
        setjobTitle={setjobTitle}
        setspecialization={setspecialization}
        setuniversityName={setuniversityName}
        handleFormSubmit={handleFormSubmit}
        />
        
     </div>
    
      <button onClick={()=>retrieveDeleted()}>Retrieve Data</button>
      <button onClick={()=>removeAllFav()}>Remove All Fav</button>

      <div className='outer'>
        <div className='middle'>
          <div className='inner'>

          </div>
        </div>
      </div>
    {getFavs()}
    </div>
   
    <div>
    {univName}
    </div>

    
   </div>

   
  );
}

export default App;
