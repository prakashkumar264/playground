
import './App.css';

const myObject = {};

function App() {

 /*  const myString="prakash";
  const myNumber= 19;
  const myBoolean = true ;

  const arr=[1,2,3];
  console.log(arr, 'arr');
  arr.push(4);
  console.log(arr, 'arr');

  const obj = {a:1}
  console.log(obj.a, 'obj.a');
  console.log(obj['a']);
  obj.a=2;
  console.log(obj, 'new obj');

  const objct={c:1};
  const copiedobjct=objct;
  const correctlycopiedobjct={...objct};

  console.log(objct, 'org');
  console.log(copiedobjct, 'copied');
  objct.c =2;
  console.log(objct, 'org');
  console.log(copiedobjct, 'copied');
  console.log(correctlycopiedobjct, 'correctly copied')

  const arrobject = [1,2,3,4];
  const copiedarrobject= arrobject;
  const correctlyarrobject = {...arrobject};


  let prim = 1;
  let copiedprim = prim;
  console.log(prim, 'org prim');
  console.log(copiedprim, 'copied prim');

  prim = 10;
  console.log(prim, 'org prim');
  console.log(copiedprim, 'copied prim');

  const myObject ={
    firstName:"prakash",
    lastName:"kumar",
    isStudent:true,
    address:{
      street:"1185 Bolyston Street",
      zipcode:"02215",
      city:"Boston",
      state:{
        mainland:true,
        outsideState:"MA"
      }
    }
  }

  console.log(myObject, 'myObject');

  console.log(myObject, 'myObject');

  const myArray=["prakash", 20, true, [1,2,3,4,5]]
 */


/*   
  function concatTwoValues(arg1, arg2){
    return arg1.concat(arg2);
  }
  console.log(concatTwoValues('Prakash', 'Kumar'), '<- Concated Data');

  const arrowDemo = (...args) =>  args[0] * args[1] / .1 ;
  console.log(arrowDemo(2, Math.PI), '<- Arrow data'); */

  // const locateCharacter = (...args) =>  ;
  // console.log(locateCharacter(), 'location');

  // let a =5;

  // function palin(...args){
  //   let dyn="https://google.com/"+args[0]+"/test/"+args[1]+"/demo.asp"
  //   return dyn;
  // }

  // console.log(palin('args1','args2'));

  //  function encodeURI(args){
  //    let encodedURI = encodeURIComponent(args);
  //    return encodeURI;
  //  }

  //  console.log(encodeURI('https://google.com'));

    // function checkType(args){
    //   return typeof args;
    // }


    // console.log(checkType("hello"));
    // console.log(checkType(5));
    // console.log(checkType(["prakash", "kumar"]));
    // console.log(checkType({isAdded:true}));
    // console.log(checkType(true));
    // console.log(checkType(function test(){}));
    // console.log(checkType(undefined));

    // console.log(Array.isArray(["prakash", "kumar"]), 'array');

    // function bodmas(...args){
    //   return (args[0]+args[1])*args[2]/args[3];
    // }

    // console.log(bodmas(2,2,3,2));

    // function divisibleByFive(args){
    //     return args%5 === 0 ? true : args%5
    // }
    // console.log(divisibleByFive(10));

    // function argumentComparer(...args){
    //    return args[0]>args[1] ? 'args1 is greater than args2' : 'args2 is greater than args1'
    // }

    // console.log(argumentComparer(-2,5));
    // console.log(argumentComparer(5,2));

    // function logicalOperatorChecker(...args){
    //   return typeof(args[0]) === 'string' && Array.isArray(args[1])  ?   !args[2]   : false;
    // }

    // console.log(logicalOperatorChecker('a',['5'], false));


  // function charLengthChecker(args){
  //   if(typeof(args) !== 'string'){
  //     return "Invalid input"
  //   }else if(args.length > 2 && args.length <= 30){
  //     return "Not enough Character"
  //   }
  //   return args.length < 2 ? "Not enough Characters" : "Too much characters"  
  // }

  // console.log(charLengthChecker("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))

  // function printNumbers(){
  //       for(let i=0; i<10; i++){
  //         console.log(`${i}`);
  //       }
  // }

  // console.log(printNumbers());

  // function printCharacters(args){
  //   for(let i=0; i<args.length; i++){
  //     console.log(args.charAt(i));
  //   }
  // }
  // console.log(printCharacters("Bootcamp"));

  // function printCharacterCodeSum(args){
  //   var count = 0;
  //   for(let i=0; i<args.length; i++){   
  //     console.log(args.charCodeAt(i), count);
  //      count += args.charCodeAt(i);
  //   }
  //   return count;
  // }
  // console.log(printCharacterCodeSum("Boot camp"));

  // function printCharactersReverse(args){
  //   for(let i=args.length -1; i>=0; i--){
  //     console.log(args.charAt(i));
  //   }
  // }
  // console.log(printCharactersReverse("Boot camp"));

  // function reverseString(args){
  //     var temp ="";
  //     for(let i=args.length -1; i>=0; i--){
  //            temp += args[i];
  //      }
  //      return temp;
  // }
  // console.log(reverseString("Bootcamp"));

  //  function reverseString(args){
  //     var temp ="";
  //     for(let i=args.length-1; i>=0; i--){
  //            temp += args[i];
  //      }
  //      return temp.toLowerCase() === args.toLowerCase()
  //   }
  //   console.log(reverseString("bootcamp"));

    // function reverseString(args){
    //   var temp ="";
    //   let i = args.length-1;
    //   while( i>=0){
    //          temp += args[i];
    //          i--;
    //    }
    //    return temp.toLowerCase() === args.toLowerCase()
    // }
    // console.log(reverseString("bootcamp"));

  

    //  function fizzBuzz(){
    //   var start = new Date().getTime();
    //    for(let i=1;i<101;i++){
    //     if( i%15 === 0){
    //       console.log("FizzBuzz")
    //     }else if(i%3===0){
    //       console.log("Fizz");
    //     }else if(i%5===0){
    //       console.log("Buzz");
    //     }else{
    //       console.log(i)
    //     }
    //    }
    //    var end = new Date().getTime();
    //    var time = end - start;
    //     var execs = 1000 / time;
    
    //      console.log('time in ms: '+time);
    //      console.log('operations per second: '+execs);
 
    //  }

    //  console.log(fizzBuzz());


    //  function fizzBuzz2(){
    //   var start = new Date().getTime();
    //    for(let i =1;i<101;i++){
    //      var fizz = i%3 ===0;
    //      var buzz = i%5 ===0;
    //      console.log(fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : i);
    //    }
    //    var end = new Date().getTime();
    //    var time = end - start;
    //    var execs = 1000 / time;
   
    //     console.log('t in ms: '+time);
    //     console.log('op per second: '+execs);

    //  }



  // function removeEmptySpaces(args){
  //     return args.trim();
  // }

  // console.log(removeEmptySpaces("   a    "));


  // function conactWords(...args){
  //   return `${args[0]}${args[1]}`;
  // }

  // function restFinder(args){
  //     return args.replaceAll("Rest", "REST");
  //   }

  //   console.log(restFinder(`Required Skills (there are 9 but we also put them in the order of what the hiring manager mentioned.

  //     Significant professional experience with ReactJS with Redux
      
  //     Significant professional experience with HTML5, Java script/jQuery, CSS
      
  //     Professional experience coding unit tests and/or Test Driven Development (TDD) 
      
  //     Good UI design / UX skills
      
  //     Experience working with Rest APIs
      
  //     Professional experience working on agile development teams
      
  //     Working knowledge of Git (GitHub or GitLab)
      
  //     Proficiency in object-oriented design and programming
      
  //     Excellent communication and collaboration skills
      
  //      Note:  The top 4 should definitely be in the ‘Relevant Experience of the resume’`));


  // function validateURL(args){
  //     return     ? true : false 
  // }    


  // function scoreReport(args){
  //   switch (args) {
  //     case "Good":
  //       console.log("Your credit score is between 650 to 700");
  //       break;
  //     case "Excellent":
  //       console.log("Your credit score is between 650 to 700");
  //       break;
  //     case "Bad":
  //       console.log("Your credit score below 650");
  //       break;
  //     default:
  //       console.log("Invalid Input");
  //   }
  // }
  // console.log(scoreReport("dd"));

  // function countletter(args){
  //   args = args.toLowerCase();
  //   var countMap = {};
  //   for (let i = 0 ; i < args.length ; i++) {
  //       countMap[args.charAt(i)] = countMap[args.charAt(i)] ? countMap[args.charAt(i)] + 1 : 1;
  //   }
  //   console.log(countMap);
  // }
  // console.log(countletter("pleasE"));


  // function firstWordLength(args1,args2){
  //   var count = 0;
  //   var arr = args1.split(" ");
  //   for(let i= 0;i<arr.length; i++){
  //     if(arr[i].charAt(0) === args2){
  //      count += arr[i].length;
  //      break;
  //     }
  //   }
  //  return count === 0 ? console.log("No word found")  :   console.log(count)
  // } 
  // firstWordLength("When boy went to boarding school, he was fine .", "b");

    // function captializeWord(args){
    //   return console.log(args.split(' ').map(arg => arg.charAt(0).toUpperCase() + arg.slice(1)).join(' '));
    // }
    // function captializeWordRegex(args){
    //     return console.log(args.replace(/(^\w|\s\w)/g, m => m.toUpperCase()));
    // }
    // captializeWordRegex("i can code all night long");
    // captializeWord("i can code all night long");


    function regexAlphabets(args){

    } 
    

  return (
    <div className="App">
      <header className="App-header">

       
       <p className="makeinbold" >Prakash Kumar</p>
       

      </header>
    </div>
  );
}

export default App;
