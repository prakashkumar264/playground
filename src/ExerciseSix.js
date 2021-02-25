import './ExerciseSix.css'
import React  from 'react'


function ExerciseSix() {



  function scoreReport(args){
    switch (args) {
      case "Good":
        console.log("Your credit score is between 650 to 700");
        break;
      case "Excellent":
        console.log("Your credit score is between 650 to 700");
        break;
      case "Bad":
        console.log("Your credit score below 650");
        break;
      default:
        console.log("Invalid Input");
    }
  }
  scoreReport("dd");

  function countletter(args){
    args = args.toLowerCase();
    var countMap = {};
    for (let i = 0 ; i < args.length ; i++) {
        countMap[args.charAt(i)] = countMap[args.charAt(i)] ? countMap[args.charAt(i)] + 1 : 1;
    }
    console.log(countMap);
  }
  countletter("pleasE");


  function firstWordLength(args1,args2){
    var count = 0;
    var arr = args1.split(" ");
    for(let i= 0;i<arr.length; i++){
      if(arr[i].charAt(0) === args2){
       count += arr[i].length;
       break;
      }
    }
   return count === 0 ? console.log("No word found")  :   console.log(count)
  } 
  firstWordLength("When boy went to boarding school, he was fine .", "b");

    function captializeWord(args){
      return console.log(args.split(' ').map(arg => arg.charAt(0).toUpperCase() + arg.slice(1)).join(' '));
    }
    function captializeWordRegex(args){
        return console.log(args.replace(/(^\w|\s\w)/g, m => m.toUpperCase()));
    }
    captializeWordRegex("i can code all night long");
    captializeWord("i can code all night long");


    function regexWordConcat(args){  
      var reg = '' ;
      var stringArr = args.split(" ");
      for(let i=0;i<stringArr.length;i++){
        var temp = stringArr[i].match(`([a-zA-Z])\\1+`)
          if( temp !== null){
            reg = reg.concat(temp[0]);
          }
      }
      console.log(reg);
    }
    regexWordConcat("Three girls went to forest .Monkey said yee yaaaaaw");


  
      return (
        <div  className="bodyExerciseSix">
        
     
            
  
        </div>
      );
    }
  
   
export default ExerciseSix;
