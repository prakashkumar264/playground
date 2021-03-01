import React, {Fragment, useEffect, useState} from 'react'
import './App.css';
import './beststyles.scss'
import data from './Student_Data.json'
import Card from './components/Card/Card'
import  {v4 as uuidv4} from 'uuid'


const uuidData = data.map(i=>{
    return{
      ...i,
      Id: uuidv4()
    }
})

function App() { 



  const[fav,setFav] = useState([])
  const[data,setData] = useState([])

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
  

  function deleteRecord(Id){
    // console.log(uuidData.length)
    // uuidData.splice(uuidData.findIndex(i => i.Id === Id), 1)
    // console.log(uuidData.length)

   let remData=  data.filter((i)=>{
      return i.Id !== Id
    })
    setData(remData)

  }


  
  useEffect(()=>{
    setData(uuidData)
  },[])

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
