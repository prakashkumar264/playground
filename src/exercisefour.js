import './exercisefour.css'
import './beststyles.scss'
import React, {useState} from 'react'


function Exercisefour() {
      const [Theme,SetTheme] = useState( "darktheme");
      return (
        <div style={{margin:'auto'}} >
        <div className={Theme}>
        {(() => {
                if(Theme == 'darktheme'){
                  return "This is dark theme"
                }else{
                  return "This is light theme"
                }
            })()}
        </div>

        <div>
          <button onClick={()=>{if(Theme == 'darktheme'){
                                    SetTheme('lighttheme')
                                  }else{
                                    SetTheme('darktheme')
                                  }
                          }}>
          <p >
           {(() => {
                if(Theme == 'darktheme'){
                  return "Change to light theme"
                }else{
                  return "Change to dark theme"
                }
            })()}
          </p>
          </button>
        </div>    
        </div>
      );
    }
  
   
export default Exercisefour;