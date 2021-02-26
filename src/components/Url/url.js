import React from 'react'
import './url.scss'
import PropTypes from 'prop-types'

function url({Career_Url, children:mychild, mystyle}){


    
        return(
            <div className={mystyle}>
      
         
              
              <a href={Career_Url} target={"_blank"} rel="noopener noreferrer">
              {`${mychild}`}
              </a>
              
    

          </div>
    
        )
    }
    
    export default url

    url.propTypes = {
        Career_Url:PropTypes.string.isRequired,
        mychild:PropTypes.node,
        mystyle:PropTypes.string
    }


    url.defaultProps = {
        Career_Url: 'https://cnn.com'
    }