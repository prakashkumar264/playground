import React,{useState} from 'react'
import './card.scss'
import Url from '../Url/url'
import PropTypes from 'prop-types'


function CardDetails({Employer, Career_Url, Job_Title, setFav,fav, Id, 
    Start_Date,Specialization,University_Name,
    deleteRecord}){

    const [currentFav,setCurrentFav] =useState('');

    function handleFavouriteClick(e, Id){
    
        let copy=[...fav]
        if(copy[0] === "No Fav companies"){
            copy.pop();
        }
        if(copy.includes(Id)){
            alert('Employer already exists')
        }
        copy.push(Id)
        setFav(copy)
    }

    function handleFavObject(args){
        const emp = args.Employer
        const e = args.e
        setCurrentFav(Employer)
    }

    function removeFav(e, Id) {
          let copy=[...fav]
          if(copy.includes(Id)){
             let index = copy.indexOf(Id)
             copy.splice(index, 1);
             setFav(copy)
          }else{
              alert('This is not Fav Employer')
          }
    }

    function isFavourite(){
       return fav.includes(Id)
    }

    return(
        <div className={isFavourite() ? 'card-container-fav' : 'card-container'}>
  
                <div> 
                <Url
                    // Career_Url={Career_Url}
                    mystyle="mystyle"
                >
                Click Here
                </Url>
                apply for job
                </div>
                <div>{Employer}</div>
                <div>{Job_Title}</div>
                <div>{Start_Date}</div>
                <div>{Specialization}</div>
                <div>{University_Name}</div>
               
                    
              
      </div>

    )
}

export default CardDetails


