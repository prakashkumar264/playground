import React,{useState} from 'react'
import './card.scss'
import Url from '../Url/url'
import PropTypes from 'prop-types'


function Card({Employer, Career_Url, Job_Title, setFav,fav}){

    const [currentFav,setCurrentFav] =useState('');

    function handleFavouriteClick(e, Employer){
        setCurrentFav(`${Employer}`)
        let copy=[...fav]
        if(copy[0] === "No Fav companies"){
            copy.pop();
        }
        copy.push(Employer)
        setFav(copy)
    }

    function handleFavObject(args){
        const emp = args.Employer
        const e = args.e
        setCurrentFav(Employer)
    }

    function removeFav(e, Employer) {
         setCurrentFav(`${Employer}`)
          let copy=[...fav]
          if(copy.includes(Employer)){
             let index = copy.indexOf(Employer)
             copy.splice(index, 1);
             setFav(copy)
          }else{
              alert(Employer +' is not Fav Employer')
          }
    }

    return(
        <div className='card-container'>
  
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
       <button onClick={(e) =>handleFavouriteClick(e,Employer)}>Favourite</button>
       {/* <button onClick={(e) =>handleFavObject({e:e,Employer:Employer})}>Favourite Object</button> */}
        <button onClick={(e) => removeFav(e,Employer)}> Remove</button>
      </div>

    )
}

export default Card


Card.propTypes = {
    Employer:PropTypes.string.isRequired,
    Career_Url:PropTypes.string,
    Job_Title:PropTypes.string
}