import React,{useState} from 'react'
import './card.scss'
import Url from '../Url/url'
import PropTypes from 'prop-types'


function Card({Employer, Career_Url, Job_Title, setFav,fav, Id, deleteRecord}){

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
           Career_Url={Career_Url}
           mystyle="mystyle"
           >
            Click Here
           </Url>
          apply for job
        </div>
        <div>{Employer}</div>
        <div>{Job_Title}</div>
        {currentFav}
       <button onClick={(e) =>handleFavouriteClick(e,Id)}>Favourite</button>
       {/* <button onClick={(e) =>handleFavObject({e:e,Employer:Employer})}>Favourite Object</button> */}
        <button onClick={(e) => removeFav(e,Id)}> unFavourite</button>
        <button onClick={() => deleteRecord(Id)}> Delete Record</button>
      </div>

    )
}

export default Card


Card.propTypes = {
    Employer:PropTypes.string.isRequired,
    Career_Url:PropTypes.string,
    Job_Title:PropTypes.string
}