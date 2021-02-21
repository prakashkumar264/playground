import './exercisefour.css'
import './beststyles.scss'
import React, {useState} from 'react'


function Exercisefour() {
      const [theme,setTheme] = useState( "darktheme");
      return (
        <div style={{margin:'auto'}} >
        <div className={theme}>
        {(() => {
                if(theme === 'darktheme'){
                  return "This is dark theme"
                }
                return "This is light theme"
        })()}
        </div>

        <div>
          <button onClick={()=>
            {if(theme === 'darktheme'){
                setTheme('lighttheme')
            } else {
                  setTheme('darktheme')
            }}}>

           {(() => {
                if(theme === 'darktheme'){
                  return "Change to light theme"
                }
                return "Change to dark theme"              
            })()}
          
          </button>
        </div>    
        </div>
      );
    }
  
   
export default Exercisefour;