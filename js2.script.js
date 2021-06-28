// Declare a fuction

function sayHello(){
  console.log("Hello");
}

// Call or invoke a fuction

sayHello();
sayHello();
sayHello();

//Declaring a function with variable

function sayGoodbye(name){
  console.log(sayGoodbye +"name");
}
sayGoodbye("Ash");
sayGoodbye("Raj");
sayGoodbye("Syamil");


// fuction with 2 parameters with results
function sum(a,b){
  return a+b;
  
}
console.log(sum(2,3));
console.log(sum(4,8));



// function with result...( example of abstration if you need to use later )
function checkEven (number){
  if (number %2 == 0){
    return true;
  } else {
    return false;
  }
}
console.log(checkEven(4));

//function with multiple results

function areaVolume(width,length,height){
  return [ width * length, width*length*height];
}
console.log (areaVolume(3,4,5))