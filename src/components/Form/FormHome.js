
import React, { Fragment, useEffect, useState } from 'react';
import './Form.scss'
import './beststyles.scss'
import data from '../../Student_Data.json' ;
import Card from '../Card/Card';
import CardDetails from '../CardDetails/CardDetails';
import { v4 as uuidv4 } from 'uuid';
import Form from '../Form/Form';
import { Link, Redirect, useHistory } from "react-router-dom";
import ModalExample from '../Modal/Modal'
import { Button,Input, FormGroup,Label,} from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import { getByDisplayValue } from '@testing-library/react';


let  uuidData = data.map(i=>{
return {
    ...i, 
    Id: uuidv4()
}

})


// console.log(uuidData,'uuidData');
// Career_Url: "https://ibegin.tcs.com/iBegin/jobs/search"
// Employer: "TCS"
// Graduation_Year: 2020
// Job_Start_Date: "6/20/2020"
// Job_Title: "Software Engineer"
// Specialization: "Computer Science"
// University_Name: "University of North Carolina at Charlotte"'
// Id:2303333303303003

//single source of truth 

// Lifting the state 

// Components
// Life cycle methods 
// Mounted , Updated , Unmounted 

function Formhome() {
const [fav, setFav] =useState([])
const [data, setData]=useState([])
const [deletedRecords, setDeletedRecords]=useState([])
const [careerUrl,setCareerUrl] =useState("")
const [employer,setEmployer] =useState("")
const [graduationDate,setGraduationDate] =useState("")
const [jobStartYear,setJobStartYear] =useState("")
const [jobTitle,setJobTitle] =useState("")
const [specialization,setSpecialization] =useState("")
const [universityName,setUniversityName] =useState("")
const [isSubmitDisabled,setIsSubmitDisabled] =useState(false)
const [isModelOpen,setIsModalOpen]=useState(false)
const [viewCurrentRecord,setViewCurrentRecord]=useState({})
const [searchText,setSearchText]=useState("")
const [searchInvoked,setSearchInvoked]=useState(false)
const [filteredData,setFilteredData]=useState([])
const [graduationYearFilter,setGraduationYearFilter]=useState({})

console.log(graduationYearFilter,'graduationYearFilter');


const history= useHistory()

function getFavs() {
let empData= uuidData.filter(i=>fav.includes(i.Id))
let returnEmployerName = empData.map(i=>i.Employer)
return returnEmployerName.join(",")
}

function handleFormSubmit () {
    console.log('handleFormSubmit invoked')
    setIsSubmitDisabled(true)
    setTimeout(()=>{
        setIsSubmitDisabled(false)
    },3000)

    let objReady = {
        Career_Url:careerUrl,
        Employer:employer,
        Graduation_Year:graduationDate,
        Job_Start_Date:jobStartYear,
        Job_Title:jobTitle,
        Specialization:specialization,
        University_Name:universityName,
        Id:uuidv4()
    }
let copyData = [objReady,...data]

setData(copyData)
    
}

function handleCardContainerOnClick (Id) {
console.log('handleCardContainer Click invoked',Id);  
let entry =data.filter(i=>i.Id === Id)
console.log(entry,'filteredEntry');
setViewCurrentRecord(entry[0])
setIsModalOpen(true)

}

function deleteRecord (Id) {
let deletedRecord= data.filter((i)=>i.Id ===Id)
console.log(deletedRecord,'deletedRecord');

let  copyDelRecords=[...deletedRecords]
copyDelRecords.push(deletedRecord[0])
setDeletedRecords(copyDelRecords)

/////////Logic for updating screen
let remainingRecord= data.filter((i)=>{
    return i.Id !==Id 
   })   
setData(remainingRecord)
console.log(remainingRecord,'remainingRecord');
}

useEffect(()=>{
setData(uuidData)
},[])

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

function handleRetrieveAllRecords() {
let mergedRecords = [...deletedRecords,...data]
console.log(mergedRecords,'mergedRecords');
setData(mergedRecords)
setDeletedRecords([])
}

const univName =filterLogic().map((i,idx,arr)=>{
const {Employer, Career_Url, Job_Title,Id,Graduation_Year} = i 

return (
    <div className='cardDiv' onClick={()=>handleCardContainerOnClick(Id)}>
    <Card 
    careerUrl={Career_Url}
    Employer={Employer}
    Job_Title={Job_Title}
    Graduation_Year={Graduation_Year}
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

<div className='container'>
   <div>

<button onClick={()=>setFav([])}>Clear All Favorites</button>
<button onClick={()=>history.push("/")}>Go Home </button>
<button onClick={()=>handleRetrieveAllRecords()}>Retrieve All Records</button>
<button onClick={()=>history.push(`/test?isSubmitDisabled=${isSubmitDisabled}`)}>Test</button>
       </div> 
Here are your favorite companies 
<div>
<input placeholder='Search with Company name'  value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
<span style={{marginLeft:'20px'}}><Button disabled={searchInvoked} onClick={()=>handleSearch()} color="primary">Search</Button></span>
{searchInvoked && <span style={{marginLeft:'20px'}}>
     <Button onClick={()=>handleClear()} color="primary">Clear</Button>
     {getGraduationYear()}

</span>

}
</div>
<div>{`Total record :::${filterLogic().length}`}</div>
<div>{`Total deleted record :::${deletedRecords.length}`}</div>
{/* <Modal
buttonLabel="Open"
title="Please enter the form "
handleFormSubmit={handleFormSubmit}
>
<Form 
careerUrl={careerUrl}
employer={employer}
graduationDate={graduationDate}
jobStartYear={jobStartYear}
jobTitle={jobTitle}
specialization={specialization}
universityName={universityName}
setCareerUrl={setCareerUrl}
setEmployer={setEmployer}
setGraduationDate={setGraduationDate}
setJobStartYear={setJobStartYear}
setJobTitle={setJobTitle}
setSpecialization={setSpecialization}
setUniversityName={setUniversityName}
isSubmitDisabled={isSubmitDisabled}
/>
</Modal> */}


<ModalExample
buttonLabel="Open"
title="Please enter the form "
handleFormSubmit={handleFormSubmit}
isModalOpen={isModelOpen}
setIsModalOpen={setIsModalOpen}
>
<CardDetails
Employer={viewCurrentRecord.Employer}
careerUrl={viewCurrentRecord.Career_Url}
Job_Title={viewCurrentRecord.Job_Title}
Job_Start_Date={viewCurrentRecord.Job_Start_Date}
Specialization={viewCurrentRecord.Specialization}
University_Name={viewCurrentRecord.University_Name}

/>
</ModalExample>   


<div>

{getFavs()}
</div>

Here is list of companies 
<div>
{univName}
</div>
 
    
</div>



) ;      

}

export default Formhome