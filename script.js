//! Spread Operator

/*
const arr = ["guvi","geek","fsd"]
console.log(...arr); 
*/

/*
const arr = ["bob","alice"]
const arr1 = ["leo","smith"]
const arr2 = [...arr,...arr1]
console.log(arr2);
*/

//! Rest parameter
/*
function test (...c){
    let even=[];
   for(let i=0; i<c.length;i++){
     if(c[i]%2 ===0){
        even.push(c[i])
     }
   }
   return even
}
console.log(test(10,11,13,15,14,16,18));
*/

//! Array destructure 
/*
const arr = ["🍎","🍊","🍓","🍒"]

* Without destructure

const apple = arr[0];
const orange = arr[1];
const strawberry = arr[2];
const berry = arr[3];

console.log(apple,orange,strawberry,berry);


 ! with destructuring

* syntax :- const [variablename] = arrayname;

const [apple,orange,strawberry,cherry] = arr
console.log(apple,orange,strawberry,cherry);
*/
//! Session task 

/*
const array = ["🍌","🍉","🍅","🥕"]
const [bannana,melon,tomato,carrot] = array;
console.log(bannana,melon,tomato,carrot);
*/

/*
const array = ["🍌","🍉","🍅","🥕"]
const [bannana,melon,tomato,carrot,apple="🍎"] = array
console.log(bannana,melon,tomato,carrot,apple);
*/

//! Object destructuring

/*
let obj = {
   names: "John",
   age:30,
   address:{
      city:"chennai",
      state:"tamilnadu"
   }
}

! Without destructure


console.log(obj.names);
console.log(obj.age);
console.log(obj.address.city);
console.log(obj.address.state);


! with destructure

* syntax :- const {keyname} = objectname;


const {names,age,address:{city,state}}= obj;

console.log(names,age,city,state);



const {names,age,address:{city,state},phone=9876543210}= obj;

console.log(names,age,city,state,phone);


! Session task
const person = {
   name: "John",
   age: 35,
   gender: "male",
   address:{
      city:"Chennai",
      state: "TN",
      country: "IND"
   },
   phone: 9876543210
}

*/

//! Array of object destructure
/*
const shop = [
   {
      item:"rice",
      price:100,
      category:"grains"
   },
   {
      item:"apple",
      price:90,
      category:"fruits"
   },
   {
      item:"carrot",
      price:80,
      category:"vegetable"
   }
]


console.log(shop);
console.log(shop[0].item,shop[0].price,shop[0].category);
console.log(shop[1].item,shop[1].price,shop[1].category);
console.log(shop[2].item,shop[2].price,shop[2].category);


! syntax:- const [{keyname}]=array of objectname

const [{item,price,category}]= shop;
console.log(item,price,category);

! we can use any for loop 
*/

//! Object of array 

/*
let obj = {
   names:"John",
   age:30,
   skills:["html","css","js"]
}

console.log(obj.names,obj.age);
for(let i=0;i<obj.skills.length;i++){
   console.log(obj.skills[i]);
}

const {names,age,skills:[skill1,skill2,skill3]}=obj
console.log(names,age,skill1,skill2,skill3);
*/
/*
const person ={
   name:"John",
   age:30,
   phone:9876543210,
   email:"john@gmail.com",
   address:["chennai","tamilnadu","india"],
   skills:["html","css","js"]
}
   */
 
//! Object shorthand property
/*
let obj = {
   id: 1,
   order:"pizza",
}
console.log(obj.id,obj.order);
*/
/*
const id =1;
const order = "pizza";
const type = "farmhouse";
const toppings = "dblcheese";

let obj = {
   id,
   order,
   type,
   toppings
}
console.log(obj);
*/