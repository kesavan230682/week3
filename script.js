///x=10;y=3, what is x+y
//1) variable-(string)
var name ="kesavan";
console.log(name);
var message = "Hello " +name;
console.log(message);

//2) variable number
var a = 10;
var b =3;
var sum = a + b ;
console.log(sum);

var a = 10;
var b = 3;
var sum = a - b;
console.log(sum);

var minus = a-b;
console.log(minus);

var product=a * b;
console.log(product);

var division= a/b;
console.log(division);

var modulo=a%b;
console.log(modulo);


//3) boolean
var hungry=true
var tired=false
// OR and AND (boolean operation)
console.log( hungry&&tired);//AND - both of it need to be true for it to be true
console.log(hungry || tired); // OR - one of it need to be true for it to be true
console.log(!hungry) // the reverse of the condition

//condition (if else)
var age =15;
if (age< 18){
  console.log('You cannot watch the movie"')
}

else{
  console.log(" You may watch the movie");
}

if (age<13){
  console.log(" you cannot watch the movie")
}
else if (age<18){
  console.log(" you can watch the movie with parents")
}
else {
  console.log(" you may watch the movie")
}


//exercise1validator

var number =50;
if (number %2==0){
  console.log(number+" is an even number");
  }
else {
  console.log(number+ " is an odd number")
}



//Exercise2ticketvalidator
var passengerAge=35;
var oriprice=100;

if (passengerAge <18){
  var finalPrice =0.5*oriPrice;
  console.log("Final Price is RM " + finalprice);
}

else if (passengerAge < 40){
  var finalPrice = 0.75 *oriprice;
  console.log("final price is RM "+ oriprice);
  
}
else if (passengerAge<65){
  var finalPrice=0.75*oriprice;
  console.log(" final price is RM"+finalPrice);
}else {
  var finalPrice=0.5*oriPrice;
  console.log("Final is RM"+ finalPrice)
  
  
}

// for loop = repeat 10 times.
// from...0 until 10; each iteration add by one

for (var i=0; i<10; i++ ){
  // show the number
  console.log (i);
}


// from10.. unil 0..each iteration i will minus by one
for (var i = 10; i>0 ; i--){
  //show the number
  console.log(i);
}

for (var i=1; i<10; i+=2){
  console.log(i);
}


//multiplication table generator
var multiplier =4;
var lines = 15;

for (var i =1; i<lines;i++){
  //in this example  <== smaller or equals to 15( until including 15)
  for (var i=1; i<=lines; i++){
    console.log(i + " x" +multiplier+"="+ i*multiplier);
  }
  
}
//{
//lines+ = multiplier + 'x 3= '+ (multiplier*3) +'<br/>';
  //multiplier++;
  
 //  }
//console.log(lines);
 

