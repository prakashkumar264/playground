import React, {Fragment, useEffect, useState} from 'react'
import './App.css';
import './beststyles.scss'
import data from './Student_Data.json'
import Card from './components/Card/Card'
import  {v4 as uuidv4} from 'uuid'
import { func } from 'prop-types';
import Form from './components/Form/Form'
import {Link, Redirect, useHistory} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Lottery from './components/Lottery/Lottery'
import { Button } from 'reactstrap';
import ModalExample from './components/Modal/ModalExample'
import CardDetails from './components/Card/CardDetails'
import { Modal } from 'bootstrap';
import { Input, FormGroup,Label,} from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import { getByDisplayValue } from '@testing-library/react';


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
  const[isModalOpen,setIsModalOpen]=useState([])
  const[viewCurrentRecord,setViewCurrentRecord]=useState({})
  const[searchText,setSearchText]=useState("")
  const [searchInvoked,setSearchInvoked]=useState(false)
  const [filteredData,setFilteredData]=useState([])
  const [graduationYearFilter,setGraduationYearFilter]=useState({})
  const [isSubmitDisabled,setIsSubmitDisabled] =useState(false)

  const history= useHistory()

 
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

  function handleCardonClick(Id){
    console.log('handleCardContainer Click invoked',Id);  
    let entry =data.filter(i=>i.Id === Id)
    console.log(entry,'filteredEntry');
    setViewCurrentRecord(entry[0])
    setIsModalOpen(true)
    
  
   }

  function handleFormSubmit(){
    console.log('handleFormSubmit invoked')
    setIsSubmitDisabled(true)
    setTimeout(()=>{
        setIsSubmitDisabled(false)
    },3000)

    let objReady = {
        Career_Url:careerUrl,
        Employer:employeer,
        Graduation_Year:gradYear,
        Job_Start_Date:startYear,
        Job_Title:jobTitle,
        Specialization:specialization,
        University_Name:universityName,
        Id:uuidv4()
    }
let copyData = [objReady,...data]

setData(copyData)
}


function handleGraduationDateOnChange(year){

  let copyObj= {...graduationYearFilter}
  copyObj[year]=!copyObj[year]
console.log(copyObj,'copyObj');
setGraduationYearFilter(copyObj)

}
useEffect(()=>{
  let getyears=filteredData.map(i=>i.Graduation_Year)
  let unique = [...new Set(getyears)];

  let obj={}
unique.forEach(l=>{
    obj[l]=true
})
setGraduationYearFilter(obj)
  
},[searchInvoked])

function getGraduationYear(){

return  Object.entries(graduationYearFilter).map(j=>{
    return  <span style={{display:'inlineFlex'}}>
   <label>{j[0]}</label>
   <Checkbox
      checked={j[1]}
      onChange={()=>handleGraduationDateOnChange(j[0])}
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    </span>
 })
  
}


     const univName =data.map(i=>{
       const{Employer, Career_Url, Job_Title, Id} = i
       return(

        <div className='cardDiv' onClick={()=>handleCardonClick(Id)}>
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
        </div>
       )
     })
     
     function handleClear(){
      setSearchText("")
      setSearchInvoked(false)
      }
      function handleSearch () {
          if(searchText.length ===0){
              setSearchInvoked(false)
          }
          else {
              setSearchInvoked(true)
          }
      
          let copyData =[...data]
              copyData = copyData.filter(i=>{
              return i.Employer.toLowerCase().includes(searchText.toLowerCase())
             }) 
             console.log(copyData,'copyData');
          if(setSearchInvoked){
             setFilteredData(copyData)
          }
          
      }


     function filterLogic () {
      if(searchInvoked){
          // return filteredData
         const filterByYear= filteredData.filter((i)=>{
       const gradYear = i.Graduation_Year 
      return graduationYearFilter[gradYear]
         })
         return filterByYear
      }
          return data
      }



  return (

    
    <div>
     Here are your fav companies
     {data.length}
    
     <div>
        <input placeholder='Search your company' onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={()=>handleSearch()} color="primary">Search</button>
     </div>
     


      <BrowserRouter>
       <Link to="/Lottery">
                Lottery
       </Link>
       <Route path="/Lottery"  component={Lottery} />
      </BrowserRouter>
    <div>
      <div> {`Total Record Delete:::  ${data.length}`}</div>
     <div>  {`Record Deleted:::  ${deletedRecords.length}`}</div>
     <div>
      <ModalExample
       buttonLabel="Form"
       buttonColor="danger"
       title="Props Modal"
       cta_primary="Submit"
       cta_secondary="Cancel"
       handleFormSubmit={handleFormSubmit}
      >
 
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
        
        />
      </ModalExample>
        

        {/* <ModalExample
          title="demo"
          handleFormSubmit={handleFormSubmit}
          isModalOpen={true}
          setIsModalOpen={setIsModalOpen}
        >
          Test Modal
        </ModalExample> */}
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
