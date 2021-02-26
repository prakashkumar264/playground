import React, {Fragment, useState} from 'react'
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


console.log(uuidData, "uuidData")

function App() { 

  const[fav,setFav] = useState(["No Fav companies"])
  

    

     const univName =uuidData.map(i=>{
       const{Employer, Career_Url, Job_Title, Id} = i
       return(


      
        <Card 

          Career_Url={Career_Url}
          Employer={Employer}
          Job_Title={Job_Title}
          key={Id}
          setFav={setFav}
          fav={fav}
        />
       )
     }

     )

  return (
         
 
    <div>
     Here are your fav companies
    <div>
    {fav.join("----")}
    </div>
   
    <div>
    {univName}
    </div>

    
   </div>

   
  );
}

export default App;
