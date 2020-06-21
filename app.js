// CHAPTER 21 to 25
// Q1
// var fName,lName,fullName;
// fName=prompt("Enter Your First Name:");
// lName=prompt("Enter Your Last Name:");
// fullName = fName+" "+lName;
// document.write("Greetings"+" "+fullName);


// Q2
// var fPhone,len;
// fPhone=prompt("Enter Your Favourite Phone:");
// len = fPhone.length;
// window.alert("Your Favourite Phone is:"+" "+fPhone+"\n"+"Length of String:"+" "+len);


// Q3
// var word;
// word="Pakistani";
// var i = word.indexOf("n");
// document.write("String:"+" "+word+"<br>"+"Index of 'n':"+" "+i);

// TASK 4

// var a = "HELLO WORLD"
// var b = a.lastIndexOf("L")
// document.write("string: " + a + "<br>" +"the last index of L:" + " " + b)

// TASK 5


// var a= "pakistani"
// var b = a.charAt(3)
// document.write("string: "+ a +" <br>" + "character at index 3: " + b)


// TASK 6


// var a = prompt("enter your first name")
//  var b = prompt("enter last name")
//  var c = "welcome"
//  var d = c.concat(" ", a,b)
//  alert(d);



// Q7
// var i="Hyderabad";
// var n=i.replace("Hyder","Islam");
// alert("City:"+" "+i+"\n"+"After Replacement:"+" "+n);


// TASK 8

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var message1 = message.replace(/and/g,"&")
// document.write(message1) 


// TASK 9

// var num = "472"
// var num1 = parseInt(num)
// document.write("value " + num + "<br>" +"type:string" + "<br>" + " value" + num1 + " <br>" + "type :number" )


// TASK 10
 

// var a = prompt("enter any name")
// var b = a.toUpperCase();
// document.write("lower case: " +a + "<br>" + "upper case: " + b );

// TASK 11


// var a = prompt("enter any name")
// var b = a[0].toUpperCase() + a.slice(1)
// document.write(b)


// TASK 12

// var a = 35.36;
// var b = a.toString();
// var c = b.replace("." , "")
// document.write("NUMBER:" + a + "<br>" + "RESULT " +c)

//   TASK 13

// var a = prompt("enter your name")
// var b = a;
// var c = String.fromCharCode(33,46,44,64)
//  if (b = "c") {
//      alert("please enter valid name");
     
     
//  }

 

// Q14
// var inP;
// var arr = ['cake','apple pie','cookie','chips','patties'];
// inP=prompt("Welcome to ABC Bakery.What do You want to order sir/ma\'am?");
// inP = inP.toLowerCase();
// for(var i=0;i<arr.length;i++){
//     if(inP===arr[i])
//     {
//         alert(inP+" "+"is found at index"+" "+i+" "+"in our bakery.");
//         break;
//     }
// else if(inP!==arr[i]){
//     alert("Sorry"+" "+inP+" "+"is not availble in our bakery");
//     break;
// }
        
    
// }




// TASK 15



// Q16
// var university = "University of Karachi";
// var arr;


//  arr =  university.split("");



// for (var j = 0; j < arr.length; j++) {
//     document.write(arr[j]+"<br>");
    
// }

// TASK 17

//  var a = prompt("enter any word")
//  var b = a.charAt(a.length-1);
//  document.write("user input "+ a + "<br>"+ "last character " + b)

// TASK 18

// var a = "the quick brown fox jumps over the lazy dog"
// var b = a.match(/the/g)

// document.write("Text: "+ a + "<br>"+ " there are " +b+ " occurrence of the word")




// CHAPTER 26 TO 30

// TASK 19

// var a = prompt("write a number");
// if (a >= 0){
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number " + a + "<br>" + "round number " + b + "<br>" + "floor number " + c + "<br>" + "ceil number " + d)
// }
// // else{
// //     document.write("error")
// // }


// TASK 20


// var a = prompt("write a number");
// if (a <= 0){
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number " + a + "<br>" + "round number " + b + "<br>" + "floor number " + c + "<br>" + "ceil number " + d)
// }
//  else{
//      document.write("error")
//  }



// TASK 21


// var a = prompt("write any number")
// if (a >= 0){
//     document.write(a)
// }
// else{

//     var b = a * -1
// document.write(b) 


// }



// TASK 22


// var a = Math.random();
// var b = Math.round(a*5)
// var c = Math.round(a*7)
// document.write("random dice value "+ b + " <br>" + "random dice value "+ c)

// TASK 23


// var a = Math.random();
// var b = Math.round(a*4);

// if (b/2 === 0){
//     document.write(b + "<br>"+ "HEAD")
// }

// else{
//     document.write(b + "<br>" + "TAIL")
// }




// TASK 24

// var a = Math.random();
// var b = Math.round(a*100);
// document.write("random number between 1 to 100: "+ b)


// TASK 25

// var a = prompt("enter your weight")
// var b = a.toString();
// document.write("your weight is  " + b)




// TASK 26

// var c = prompt("enter number between 1 to 10");
// var a = Math.random();
// var b = Math.round(a*10);
// // document.write(b + "<br>" + c + "<br>")
// if ( c === "b")
// {
//     document.write("congratulation")
// }
// else{
//     document.write("try again")
// }





// CHAPTER 31 TO 35

// TASK 27


// var a = new Date();
// document.write(a);

// TASK 28

// var month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//  var a = new Date();
//  var b = a.getMonth()
//  document.write("the current month is:  ".fontsize(6) + month[b].fontsize(7));



// TASK 29


// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3)
// alert("today is " +c)


// TASK 30


// var a = new Date();
//  var b = a.toString();
// var c = b.slice(0,3)

// if ( c === "sat"||"sun"){
//     document.write("it's fun day".fontsize(6))
// }



// TASK 31


// var a = new Date();
// var b = a.toString();
// var c = b.slice(8,10)
// if( c <= 15)
// {
//     document.write("first fifteen day of the month")
// }
// else{
//     document.write("last days of the month")
// }



// TASK 32

// var a = new Date();
// var b = a.getTime();
// var c = (b/1000*60*60);
// document.write("current date: "+ a + "<br>" + "Elapsed millisec since 1,jan 1970: "+  b +"<br>" + "Elapsed millisec since 1,jan 1970:  " + c)



// TASK 33


// var a = new Date();
// var b =  a.getUTCHours();
// var c = (b + 5);
// if ( c <= 12){
//     document.write("its AM")
// }
// else{
//     document.write("its PM")
// }


// TASK 34

// var a = new Date("may 31, 2020");
// document.write("later date: " + a)

// TASK 35


// var a = new Date();
// var b = new Date("april 24, 2020")
// var c = a.getTime();
// var d = b.getTime();
// var e = c -d;
// var f = Math.floor( e/(1000*60*60*24));
// document.write(f + "  days have passed since 1st ramazan 2020")


// TASK 36


// var a = new Date();
// var b = new Date("jannary 1, 2020");
// var c = a.getTime();
// var d = b.getTime();
// var e = c - d;
// var f = e/(1000*60);
// document.write("on reference date: " + a + " , " + f +"second had passed since beginning of 2020 ") 


// TASK 37


// var a = new Date();
// var b = new Date("june 20, 1920")
//  document.write("current date:  "+ a +"<br>"+ "100 year back it was: " + b)


// TASK 38


// var a  = prompt("enter your age");
// var b = new Date();
// var c = b.getFullYear();
// var d = c - a;
// var e = new Date();
// e.setFullYear(d);
// var f = e.getFullYear();
// document.write("your age is: "+ a + "<br>"+ "your date of birth is: "+ f)









// TASK 39

// var name = "ABC"
// var month = "june"
// var unit = 410;
// var charges = 16;
// var payment = unit * charges;
// var late_payment = 350;
// var after_date = payment + late_payment;
// document.write("K-Electric Bill".fontsize(7)+"<br>"+ "Customer Name " + name +"<br>"+ 
// "Current month " + month +"<br>"+ "number of unit " + unit
// +"<br>"+ "charges per unir " + charges +"<br>"+ "Net Amount Payable (within Due Date) " + payment
// +"<br>"+ " Late Payment Surcharge " + late_payment +"<br>"+ "Gross Amount Payable (after Due Date) "+ after_date  )






// CHAPTER 35 TO 40

// TASK 40


// function date() {
    
//         var a = new Date();
//         document.write(a)  
    
// }
// date();


// TASK 41


// function greeting() {
//     var a = prompt("enter first name")
//     var b = prompt("enter lst name")
//     document.write("welcome " + a+b)
// }
// greeting();


// TASK 42


// function addition(a,b) {
//     var c = a + b;
//     return c;
    
// }
// var x = addition(prompt("enter first name"),prompt("enter last name"))
// document.write("the result is "+ x)



// TASK 43

// function calculator(a,b,c) {
//  var d = a + b + c
//  return d;

// }
//  var x = calculator(prompt("enter first num"),prompt("enter operation"),prompt("enter second num"))
//  document.write(x)


// TASK 44



// function square() {
//     var a = prompt("enter any num")
//     var b = a*a;
//     document.write("the square of the "+a + "is " +b)
    
// }
// square();




// TASK 45



// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//  else{
//   var b = x * factorial(x-1);
//   return b;
  
//  }   
// }
// var a =(factorial(prompt("enter any num")));
// document.write("the factorial is "+ a)


// TASK 46

// function a(){
//  var b = prompt("enter staring num")
//  var c = prompt("enter ending num")
// for ( i = b ; i<c ; i++){

// document.write(i + "<br>")

// }

// }


// a();



// TASK 47


// function Hypotenus(base,  per) {
//     var a = (base*base  + per*per) ;
//     var b = Math.sqrt(a)
//     return b;
// }
// var c = Hypotenus(prompt("enter base"),prompt("enter per"))
// document.write("the hypotenus is "+ c)



// TASK 48

// function a(b,c){

//     var d = b*c;
//     return d;

// }

// var e = a(prompt("enter width"),prompt("enter height"))
// document.write("the area of triangle is " +e)


// TASK 49

// function palindrome(text) {
    
//     var charArray = text.toLowerCase().split('');
    
//     var result = charArray.every((letter, index) => {
//     return letter === charArray[charArray.length - index - 1];
//     });
    
//     return result
//     }
//     var a = palindrome(prompt("enter any word"))
//     document.write(a)


// TASK 50

// function titleCase(a) {
//     var b = a.toLowerCase().split(" ");
  
//     for (var i = 0; i < b.length; i++) {
//       if (b.length[i] < b.length) {
//         b[i].charAt(0).toUpperCase();
//       }
  
//       a = b.join(" ");
//     }
  
//     return a;
//   }
  
//   document.write(titleCase(prompt("enter any sentence")));
  


// TASK 51

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var a =(find_longest_word(prompt("enter any sentence")));
// document.write(a)



// TASK 52

// function text_length(){
//     var text = prompt("enter any word")
//     var b = text.length;
//     document.write(b)
// }
// text_length();