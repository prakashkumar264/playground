import React, { useState } from 'react'
import './Lottery.scss'
import Url from '../Url/url'
import PropTypes from 'prop-types'

const availableTeamNames =['Einstein', 'Newton', 'Tesla']
const availableCandidates=["Venkat", "Kevin", "Kinjal", "Eric", "Ronish", "Prakash", "Lalit"]

function Lottery({}){

    const[pickedNumbers,setPickedNumbers] = useState([])

    function handleLottery(e,Employer){
         let randomNumber = [Math.floor(Math.random()*availableCandidates.length)]
         console.log(randomNumber, 'randonNumber')
        if(!pickedNumbers.includes(randomNumber) && pickedNumbers.length<= 7){
            let newPickedNumer=[...pickedNumbers]
            newPickedNumer.push(randomNumber)
            setPickedNumbers(newPickedNumer)
        }
    }

    return(
        <div className='Lottery-container'>
           <button onClick={(e)=>handleLottery(e)}>Start Lottery</button>
        </div>
    )
}