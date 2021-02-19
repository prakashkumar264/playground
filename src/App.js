import './App.css';
import './beststyles.scss'
import React, {useState} from 'react'

function App() {

  const [theme,setTheme]=useState('darktheme')

  return (

    <div>
    <div className="container">

<div className={theme}>
  This is  theme
</div>

<div>

  <button onClick={()=>{if(theme == 'darktheme'){
                            setTheme('lighttheme')
                          }else{
                             setTheme('darktheme')
                          }
                  }}>Change  Theme</button>
</div>

{/* 
    <div className='horizontalbar'>
      Check out new store arrival
    </div>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>
    <h6>TEXT GHERE</h6>

    <div className='stickybar'>
      This is a verticalbar
    </div>
     
     <div class="direction">
        go here for <a href="https://www.cnn.com/" target="_blank">CNN</a>
     </div>

     <div class="beforeAfter">
       This is before text :
     </div>
      */}
  {/*   <div className="Box">1</div>
    <div className="Box">2</div>
    <div className="Box">3</div>
    <div className="Box">4</div> */}

{/*     <div className="boxFlex">
      1
    </div>
    <div className="boxFlex">
      2
    </div>

    <div className="boxFlex">
      3
    </div>
    <div className="boxFlex">
      4
    </div>
 */}

  {/*    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis pellentesque purus quis lacinia. Donec viverra enim leo, tristique posuere mauris rhoncus ac. Donec sed mi elementum, consectetur orci sit amet, faucibus massa. Proin in velit mollis, dapibus urna ut, semper risus. Mauris et odio id est gravida placerat. Curabitur fermentum auctor metus, non feugiat sapien. Sed tristique, enim sed vehicula elementum, ante nisl aliquam ipsum, et tincidunt purus nunc ut ligula. Nullam lobortis ultricies nisl, laoreet pellentesque odio. Praesent ultrices aliquet maximus. Vivamus nec augue a ligula congue tempor. Maecenas ornare dui sit amet orci posuere ultricies ut sed risus. Donec eget dui quam. Quisque in feugiat ante. Aenean euismod nisl elit, nec efficitur ipsum pulvinar ac.
   </p>



      
    <div class="relativecontainers">
    <div class="relative">
      <div class="absoluteLeftBottom">
     This is absolute container in left bottom
      </div>
      <div class="absoluteRightTop">
         This is absolute container in right top
      </div>
      <div class="absoluteCenter">
        
      </div>
    </div>

    </div>
    */}
    </div>
    </div>
   
  );
}

export default App;
