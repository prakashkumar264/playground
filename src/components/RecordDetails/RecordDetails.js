
import axios from 'axios'
import React, {fragment, useEffect, useState} from 'react'
import {Link, Redirect, useHistory, useParams} from 'react-router-dom'

function RecordDetails(){
    const [isDataLoaded, setisDataLoaded] = useState(false)
    const [data,setData] = useState([])
    const params = useParams()

   console.log(params, 'param')



    console.log('test')

    useEffect(()=>{
        setisDataLoaded(true)
        axios.get(`/recorddetails/?id=${params.Id}`)
        .then(res=>{
            console.log(res)
            setData(res.data)
            setisDataLoaded(false)
        })
        .catch(e=>{
            setisDataLoaded(false)
            console.log(e)}
        )
    })
    

    return (

        <div>
            record details
        </div>
    )

}

export default RecordDetails