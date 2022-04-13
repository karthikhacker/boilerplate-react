/**************************************BASICS**********************************************/
//variables
// JS has three kind of variables var, let and const
// var - Declares a variable, optionally initializing it to a value.
var x = 32;
// let - Declares a block-scoped, local variable, optionally initializing it to a value.
let y = 24;
// const -  Declares a block-scoped, read-only named constant.
const z = 21;

// A variable declared using the var or let statement with no assigned value specified has the value of undefined.

var a;
console.log(a);
console.log(b);
var b;
//console.log(c);

// variable scope 
// When you declare a variable outside of any function,it is called global scope
var gl = 10;
function show() {
    console.log(gl);
}
show();
// let and const scope
// let and const are block scoped
let global = 'global variable';
function glo() {
    let local = 'local variable';
    console.log(global);
}
glo();
//console.log(local);

// Hoisting 
//console.log(hoi); //reference Error
let hoi = 3;

// Data structure and types 

// 1. Boolean
console.log(Boolean(0)); // false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); // false

//2. null
console.log(typeof (null)); // object
let kar = null;
console.log(kar);

//3. undefined
var un;
console.log(un);

/////////////////////////////////////4. Number/////////////////////////////////////////////
let n = 10; // number primitive type
console.log(n);
console.log(typeof (n));
////////////////////////////////////Number methods/////////////////////////////////////////

console.log(n++);

//5. symbol
const sym1 = Symbol();
console.log(sym1);

// 6. String 
const strng1 = 'karthik';
console.log(strng1);
const strng2 = new String('karthik- constructor'); // creates new string object
console.log(strng2);

//string methods 


let str = 'I love javascript,because its a greate language.';
let str2 = 'and its the most popular language in the world';

// 1.  length 
console.log(str.length); // length 48

// 2.  toLowerCase
console.log(str.toLowerCase());

// 3 . toUpperCase()
console.log(str.toUpperCase());

// 4. includes 
//includes is case sensitive
console.log(str.includes('javascript')); //true
console.log(str.includes('non')); //false

// 5. indexof 
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
console.log(str.indexOf('r')); // 13
console.log(str.indexOf('nan')); // -1

// 6. lastIndexof 
// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
console.log(str.lastIndexOf('l')); //39

// 7. match 
//The match() method retrieves the result of matching a string against a regular expression.

console.log(str.match(/i/g)); // ['i','i']

//8 .  replace
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

console.log(str.replace('greate', 'awesome'));

// 9 search 
//The search() method executes a search for a match between a regular expression and this String object.

console.log(str.search('its')); // 26

// 10.  slice 
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

console.log(str.slice(2, 17)); // love javascript

// 11. substring()
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

console.log(str.substring(0, 1)); // I 
console.log(str.substring(0, 6)); // I love

// 12. substr()
// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
// str.substr(start[, length])

console.log(str.substr(0, 5));

// 13. split()
//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
// str.split([separator[, limit]])
console.log(str.split(''));

// 14 . charAt()
// The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
// charAt(index)
console.log(str.charAt(7)); // j

// 15.  concat()
console.log(str.concat(str2));

// 16. endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate
console.log(str.endsWith('.')); // true

// if else statements 
if (4 < 5) {
    console.log('You are correct');
} else {
    console.log('you are wrong');
}

//switch statement 
const expr = 'Mangoes';
switch (expr) {
    case 'oranges':
        console.log('Oranges are  $0.59 a pound');
        break;
    case 'Mangoes':
        console.log('Mangoes are $0.99 a pound');
        break;
    case 'Blue berries':
        console.log('Blue berries are $2.1 a pound');
        break;
    default:
        console.log(`we are out of stock ${expr}`);
}

// Exception handling statement
try {
    add()
    console.log('code')
} catch (e) {
    console.log(e.message)
}

// Loops and iterations 

//for loop
//A for loop repeats until a specified condition evaluates to false. 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//doWhile()
// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. 
let i;
do {
    i = i + 1;
} while (i < 5);
console.log(i);

//while 
//The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
let w = 0;
while (w < 3) {
    w++;
}
console.log(w);

//for in statement 
//The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
// syntax - for (variable in object)

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(object[key], key);
}

//for of loop
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
const array = ['a', 'b', 'c'];
for (const val of array) {
    console.log(val);
}

/////////////////////////////////////FUNCTONS////////////////////////////////////////////////
//function declaration or function definition
function firstFunction() {
    console.log('my first function in jvascript');
}
firstFunction();

//local variable - a variable decalred inside a function
function local() {
    let lv = 'local variable';
    console.log(lv);
}
//console.log(lv);
local();

let username = 'karthik';
function showMsg() {
    let username = 'bob';
    console.log(username); // bob it shadows the global variable
}
showMsg();

// function expression 
let ex = function () { // anonymous function
    console.log('Function expression');
}
ex();

// function aruguments and parameters 
function sing(song) { //function parameter
    console.log(song);
}
sing('Back street back alright'); // function argument

function multiply(num) {
    return num * num; // returns num and function terminates
}
console.log(multiply(4));

// Arrow functions 
const calcArea = (radius) => {
    return 3.14 * radius ** 2;
}
const area = calcArea(2);
console.log(area);

// callback function 
let people = ['karthik', 'cal', 'mark', 'sophi'];

const logPerson = (person, index) => {
    console.log(index, person);
}
people.forEach(logPerson);

///////////////////////////////////// Arrays///////////////////////////////////////////////////
// declaration
//let arr = [];
//console.log(arr);

/////////////////////////////////////Array methods////////////////////////////////////////////// 
//1. push 
// appends the element to end of the array 
let arr = ['tiger', 'cat', 'bear', 'elephant'];
arr.push('Lion');
console.log(arr);

// pop
//Extracts the last element of the array and returns it:
arr.pop();
console.log(arr);

//shift 
//Extracts the first element of the array and returns it:
arr.shift();
console.log(arr);

//unshift 
// Add the element to the beginning of the array:
arr.unshift('Lion');
console.log(arr);

// filter 
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const result = arr.filter(arr => arr.length < 5);
console.log(result);

// forEach
//The forEach() method executes a provided function once for each array element.

let eatbles = ['cake', 'eggs', 'pizza', 'burger'];
eatbles.forEach(el => console.log(el));

// indexOF
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison', 2)); // 4

// join
//The join() method creates and returns a new string by concatenating all of the elements in an array
//arr.join([separator])
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());

//reduce 
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//arr.reduce(callback( accumulator, currentValue)

const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(sum); // 21 

// reverse 
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//arr.reverse()
const rev = ['one', 'two', 'three'];
console.log(rev.reverse());

// map 
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const red = [1, 2, 4, 6, 7];
const res = red.map(x => x * 2);
console.log('Array map - ', res); // return new array

//slice 
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
// syntax - array.slice(begin,end)
// ending not included 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const new_animal = animals.slice(0, 3); // ant,bison,camel
console.log(new_animal);
const new_animal1 = animals.slice(-3, -1);
console.log(new_animal1); // camel, duck

//some 
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const s = [1, 2, 3, 4, 5, 6, 7];
console.log(s.some(el => el % 2 === 0)); //true

//sort 
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const alpha = ['fox', 'eagle', 'dog', 'cat', 'bat', 'ant'];
console.log(alpha.sort());

//splice 
//he splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements 
const destination = ['delhi', 'chennai', 'banglore', 'mumbai'];
console.log(destination.splice(0, 2));

// flat 
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//arr.flat(), take depth as an argument
const nested = [1, 2, 3, [5, 6], [7, 8]];
console.log(nested.flat());
const nest = [1, 2, 3, [4, 5, [6, 7]]];
console.log(nest.flat(2));

////////////////////////////////////////Iterators and iterables/////////////////////////////////////////

//1. Iterables
// Objects that can be used in for..of are called iterable.
// Built-in iterables Arrays,string
// In order to be iterable, an object must implement the @@iterator method.

//2. Iterators
// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.
//  An iterator is an object which implements  the iterator protocol  by having  a next() method 
// that returns an object with two properties - 
// 1. value - The next value in the iteration sequence.

// 2. done -  This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

// Map datastructure 
//A Map data structure allows to associate data to a key.
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

let myMap = new Map();
console.log(myMap);

// Map methods 
// 1. set 
// The set() method adds or updates an element with a specified key and a value to a Map object.
// syntax - myMap.set(key, value)

const map1 = new Map();
map1.set('bar', 'foo');
console.log(map1);
map1.set(1, 'karthik');
console.log(map1);
map1.set(1, 'sam');
console.log(map1);

//2. get 
//The get() method returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.
// sytax - myMap.get(key)
console.log(map1.get(1)); // sam 

//3. size 
// The size accessor property returns the number of elements in a Map object.

console.log(map1.size);

// 4. has 
//The has() method returns a boolean indicating whether an element with the specified key exists or not.

console.log(map1.has(1)); // true
console.log(map1.has('2')); //false

//5. delete
// The delete() method removes the specified element from a Map object by key.

console.log(map1.delete('bar')); //true 

//6. clear 
// The clear() method removes all elements from a Map object.

map1.clear();
console.log(map1.size);

///// set 
//  The Set object lets you store unique values of any type, whether primitive values or object references.

const set1 = new Set();
console.log(set1);

//1. add 
// The add() method appends a new element with a specified value to the end of a Set object.
set1.add(24);
console.log(set1);

//2. has 
// The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.

const set2 = new Set(['orange', 'apple', 'banana', 'lemon']);
console.log(set2.has('orange')); // true

//////////////////////////////////////////Objects////////////////////////////////////////////

// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

// object literals
const myObj = {
    make: 'Ford',
    model: 'Mustang',
    year: '2021'
}
console.log(myObj["make"]); //accesing object using bracket notation
//update property
myObj["colour"] = 'Black';
// deleting a property 
delete myObj.year;
console.log(myObj);

// object methods 
let signup = {
    username: 'karthik',
    password: 'hacker24',
    dob: '24/12/1985',
    loggedIn: function () {
        console.log(`loggedin as ${this.username}`);
    }
}
signup.loggedIn();

// Object.assin
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(Object.assign(target, source));

//hasOwnProperty
//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

let obj = {
    name: 'karthik'
}
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('fullname')); //false

///////////////////////////////////// Date object /////////////////////////////////////////////
//1. Date()
let date1 = new Date();
console.log(date1);

//2. getDate()
// syntax dateObj.getDate()
console.log(date1.getDate()); //oct 10

//3.getDay();
// 0-sunday,1.monday,2.tuesday,3.wednesday
console.log(date1.getDay()); // 3 - wed 

//4. getFullYear()
console.log(date1.getFullYear()); //2021

//5.getHours()
console.log(date1.getHours());

//6.getMilliseconds()
console.log(date1.getMilliseconds());

//7.getMinutes()
console.log(date1.getMinutes());

//8.getMonth()
console.log(date1.getMonth());

//9. getSeconds()
console.log(date1.getSeconds());

//10. getTime()
console.log(date1.getTime());

//11. Date.now()
console.log(Date.now());

///////////////////////////////////// Math ///////////////////////////////////////////////////

//Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.
//1. Math.ceil();
//The Math.ceil() function always rounds a number up to the next largest integer.
console.log(Math.ceil(2.9)); //3

//2. Math.floor()
//The Math.floor() function returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95)); //5

//3. Math.max()
console.log(Math.max(0));

//4.Math.random()
console.log(Math.random());

//5.Math.round()
console.log(Math.round(1.5));

////////////////////////////////////////JSON///////////////////////////////////////////////
//javascript object notation

let person = {
    name: 'karthik'
}
console.log(person);
//convert to Json
//1.JSON.stringyfy();
console.log(JSON.stringify(person));

//2.JSON.parse()
//convert json to a javascript object 
const json = '{"result":true, "count":42}';
console.log(JSON.parse(json));

////////////////////////////////////////DOM/////////////////////////////////////////////////
// The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
// Document nethods 
console.dir(document);

//1. append()
let myDiv = document.getElementById('myDiv');
myDiv.append('HI')
console.log(myDiv);

//2. document.createElement()
let newDiv = document.createElement('div');
let mySection = document.getElementById('mySection');
newDiv.append('New div has been created dynamically');
mySection.append(newDiv);

//3. createTextNOde()
let textDiv = document.getElementById('textDiv');
let text = document.createTextNode('HI im a text node');
textDiv.append(text);

//4. getElementById()
console.log(document.getElementById('textDiv'));

//5. getElementByTagName()
let tagname = document.getElementsByTagName('div');
console.log(tagname);

//6.getElementsByClassNames()
const clnames = document.getElementsByClassName('myClass');
console.log(clnames);

//7. querySelector()
let query = document.querySelector('.myClass');
console.log(query);

//8. querySelectorAll()
let all = document.querySelectorAll('.myClass');
console.log(all);

// DOM traversing 
let node = document.querySelector('.myClass');
console.log(node.parentNode);

//DOM events 
//1. click
let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    console.log(e);
})

//2. mouseover 
let mouse = document.querySelector('#mouse');
mouse.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'orange';
})

//3. mousedown
//The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.

//4.keydown
//This event is fired when key is pressed
// const key = document.querySelector('#keyevent');
// key.addEventListener('keydown', function (e) {
//     console.log(e.code);
// })

//5.keyup
//This event is fired when key is released
const up = document.querySelector('#keyevent');
up.addEventListener('keyup', (e) => {
    console.log(e.code);
})
//6. focus
const uname = document.querySelector('#username');
const password = document.querySelector('#password');
uname.addEventListener('focus', (e) => {
    e.target.style.background = 'blue';
})

// 7. blur
uname.addEventListener('blur', (e) => {
    e.target.style.background = '';
})
console.log(window.history);

// local storage
let myStorage = window.localStorage;
//localStorage.setItem
console.log(window.localStorage.setItem('Hello', "karthik"));
//localStorage.getItem
console.log(localStorage.getItem("Hello"));
//loccalStorage.removeItem
console.log(localStorage.removeItem("Hello"));
//localStoraget.clear()
localStorage.setItem('Bloody', 'asshole');
localStorage.clear();

const user = { name: 'karthik' };
console.log(user);
localStorage.setItem('user', JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem('user')));

//8. window.open()
const op = document.querySelector('#open');
op.addEventListener('click', () => {
    window.open("https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344046#overview", "", "width=500px,height=200px");
})

const close = document.querySelector('#close');
close.addEventListener('click', () => {
    window.close();
})

//9. setInterval() & clearInterval()
const timer = document.querySelector('#timer');
const btnStart = document.querySelector('#btn-start');
const stopTimer = document.querySelector('#stop-timer');
let count = 0;
btnStart.addEventListener('click', () => {
    //setInterval
    const intervalId = setInterval(() => {
        count += 1;
        timer.textContent = count;
    }, 1000);

    //stop timer 
    stopTimer.addEventListener('click', () => {
        clearInterval(intervalId);
    })
})

//10. setTimeout
const showBtn = document.querySelector('#show');
showBtn.addEventListener('click', () => {
    setTimeout(() => {
        alert('Hi there!')
    }, 3000)
})

//11. fetch 
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json()
//         // }).then(data => console.log(data))


/*****************************************ADVANCE- JS **********************************************************/

//Recursion and stack
//When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.
// Example1.
function num(n) {
    //base case 
    if (n <= 0) {
        return;
    }
    console.log(n);
    n--
    num(n); //recursive call
}
num(10);

//Example2  Range of numbers 
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    }
    return [startNum].concat(rangeOfNumbers(++startNum, endNum))

};

console.log(rangeOfNumbers(2, 7));

//Example3
function countdown(n) {
    if (n <= 0) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }

}
console.log(countdown(5));

//EXAMPLE 4. Sum of all salaries 
let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};
function sumSalaries(salary) {
    // base case 
    if (Array.isArray(salary)) {
        return salary.reduce((acc, crrValue) => acc + crrValue.salary, 0);
    } else {
        let sum = 0;
        for (let val of Object.values(salary)) {
            sum += sumSalaries(val);
        }
        return sum;
    }
}
console.log(sumSalaries(company));

// Example 5. sumTo
function sumTo(n) {
    //base case 
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

console.log(sumTo(5)); // 5 + 4 + 3 + 2 + 1 = 15

//Example 6. factorial 
function factorial(n) {
    //base case 
    if (n < 1) {
        return 1;
    } else {
        return n * factorial(n - 1) //recursive call
    }

}

console.log(factorial(5));

////////////////////////////////////////// Advance Scope and clousers/////////////////////////////////

//Exmple 1.
function a() {
    var p = 10;
    //console.log(p);
    function inner() {
        console.log(p)
    }
    inner()
}
a();
//console.log(p);

//Lexical enivornment
//1. When we run the above code a global exicution context is created and is pushed into the callstack.
//2. Global exicution context has memory and  code sections.
//3.After invoking the function a, another exicution context is created for function a.
//4.Will store p in memort and iner function is set. Initialy b is set to undefined.
//5.After javascript engine starts exicuting the code,p's value will 10.
//6. One more global exicution context is created for inner function.
//7. Lexical means hirachry 
//8. Inner function is lexicaly inside a function.
//9. function a is lexicaly in global scope
//10. When ever the lexical envirnoment is created ,it also created a ref to its parents. ex : inner has ref to a
//11. function a memory space and ref points to global
//12. Global points to null,because it doest have parent.

// Hoisting in javasccript 
//

hoisting(); // javascript hoisting
console.log(h); // undefined 

var h = 10;
function hoisting() {
    console.log("Javascript hoisting");
}

// 1.  Javascript created memory,before start exicuting the code and places spl placeholder undefined.
// 2.  Only function definition are hoisted,not function expersion.

// block scope  and shadowing  let ,const  and var 

//1. Block is used to  wrap multiple statements.
//2. Variables and funcitons ,we can access inside the block is called block scope.
//3. Let and const are block scoped,they are stored in a seperte memory space.
//4. Block is also know as compond statement.
{
    var v = 30;
    let o = 10;
    const c = 20;
}

console.log(v);
//console.log(o);
//console.log(c);

// Closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

// Ex 
function closures() {

    function inside() {
        var b = 10;
        console.log(a);
    }
    let a = 7;
    inside();
}
closures();

var g = 100;
function sc() {
    var f = 10;
    console.log(f);
}
sc();
//console.log(f);

// callback functions 
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
setTimeout(function () {
    console.log('Timer')
}, 5000);

function cal(back) {
    console.log("callback");
    back();
}
cal(function back() { console.log(" cal") }) //callback function

document.getElementById('callback').addEventListener('click', function xyz() {
    console.log('Callback functions')
})

// Function apply,call and bind method.

//call method
let name = {
    firstname: 'karthik',
    lastname: 'sundararajan',
}

//method 
let printFullname = function (hometown, state) {
    console.log(this.firstname + "  " + this.lastname + " from  " + hometown + " " + state);
}
printFullname.call(name, "chennai", "Tamilnadu");

let name2 = {
    firstname: 'sachin',
    lastname: 'Tendulkar'
}
// This method also called as function borrowing
printFullname.call(name2, "banglore", "karnataka");

//apply method
//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
printFullname.apply(name2, ["banglore", "karnataka"]);

//bind method
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

let c1 = {
    x: 42,
    y: 21
}

function coord() {
    console.log(this.x + ", " + this.y);
}

let mod = coord.bind(c1);

mod();

// Higher order function 
// A function that accepts and/or returns another function is called a higher-order function.
function questions(name) {
    return function () {
        console.log(name)
    }
}
questions('ui')(); //We are using double parentheses ()() to invoke the returned function as well.

let qs = questions("karthik");
qs();

// Function currying
//
function one(name) {
    return function (place) {
        return function (thing) {
            console.log(name + " " + place + " " + thing);
        }
    }
}

one('karthik')("banglore")("laptop");

////////////////////////////// Object oriented programming in javascript///////////////////////
// prototype &  inheritance
//1. Every javascript object has a  prototype property which makes  inhertance possible.
//2. The prototype  property  of an object where we put  methods and  properties that  we want other
// object to inherit
//3. The constructor's prototype  is not  the prototype of constructor itself
// it's the prototype of  All instances that are created through it.
//4. When a certain method is called the search starts in object itself,if it cannot found , search moves 
// object prototype . it continues until the method is found,this is called prototype chain.

// Function constructor 
let profile = {
    name: 'karthik',
    yearOfBirth: 1985,
    job: 'Fullstack engineer'
}

//console.log(profile);

//
const Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// prototype method 
Person.prototype.clacAge = function () {
    console.log(2021 - this.yearOfBirth);
}

let karthik = new Person('Karthik', 1985, 'Fullstack developer');

karthik.clacAge();

var Athlete = function (name, yearOfBirth, job, olympicGames) {

}

// IIFE
// A soon as function is created it invokes itself doesn’t need to invoke explicitly.
// (function () {
//     console.log('IIFE')
// })();

// Class
//The class declaration creates a new class with a given name using prototype-based inheritance.

//Es6
class Person1 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // // method 
    calculateAge() {
        let age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
}

//instance 
let p1 = new Person1('karthik', 1985, 'fullstack developer');
p1.calculateAge();

//this 

// 1. The value of this determined by  how a function is called (runtime).

// 1. Default binding 
// In defult binding,'This' points to the global object
// In strict mode global object is not eligible for default binding.It is undefined.
//the global object is only eligible for the default binding if the contents of foo() are not running in strict mode; the strict mode state of the call-site of foo() is irrelevant.

// function foo() {

//     console.log(this.f);
// }
// var f = 2;
// foo();

//2. Implicit binding
// call-site have a context object ref to function.
// Ex 
// let obj2 = {
//     a: 2,
//     foo: function () {
//         console.log(this.a)
//     }
// }

// obj2.foo(); // 2

//Ex 2
function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    // `fn` is just another reference to `foo`

    fn(); // <-- call-site!
}

var obj2 = {
    a: 2,
    foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo(obj2.foo); // "oops, global"

// Expilicit binding 
function exp() {
    console.log(this.a);
}

let obj3 = {
    a: 10
}

exp.call(obj3);

//bind 
let obj4 = {
    a: 10
}

function foo1(something) {
    console.log(this.a + something);
    return this.a + something;
}

let val = foo1.bind(obj4);
let val1 = val(3);
console.log(val1);

// new bnding 
//the newly constructed object is set as the this binding for that function call
function foo2(a) {
    this.a = a;
}

let n1 = new foo2(3);
console.log(n1.a);

// Expilicit binding takes precedent over implicit biding.
//this is arrow function 
let foo3 = () => {
    var self = this;
    console.log(self);
}

foo3();

var myObj1 = {
    a: 23
}
console.log(Object.getOwnPropertyDescriptor(myObj1, "a"));
// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}

let circle = createCircle(1);
circle.draw();

//constructor function
function Car(brand, color) {
    this.brand = brand;
    this.color = color;

}

//Putting the method in prototype
Car.prototype.detail = function () {
    console.log(this.brand, this.color);
}
var myCar = new Car('Honda', 'White');
myCar.detail();

// Class
class Person2 {
    //consdtructor
    constructor(_name, _dob, _job) {
        console.log('This is a constructor');
        this.name = _name;
        this.dob = _dob;
        this.job = _job;
    }
    //methods 
    getInfo() {
        console.log(this.name, this.dob, this.job)
    }
}

const per1 = new Person2('karthik', 1985, 'fullstack engineer');
per1.getInfo();

//Getters and setters
//getter - The get syntax binds an object property to a function that will be called when that property is looked up.

//setter - 
class Book {
    constructor(author) {
        this.author = author;
    }
    //getter
    get writer() {
        return this.author
    }
    //setter 
    set writer(updatedAuthor) {
        this.author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'karthik';
console.log(novel.writer);

this.karthik = 10;
console.log(this.karthik);

// class inheritance 
class User1 {
    constructor(name, password,) {
        this.name = name;
        this.password = password;
    }
    //methods 
    login() {
        console.log(`Loggedin as ${this.name}`)
    }
    // method 
    logout() {
        console.log(`${this.name} you are loggedout`)
    }
}

const userOne = new User1('karthik', 'hacker24');
userOne.login();
userOne.logout();


// object.create 
var anotherObject = {
    a: 2
}
console.log(anotherObject);

console.log(typeof (undefined));
console.log(typeof (null));
console.log(typeof (Symbol()));
console.log(typeof [1, 2, 3]);

let f = function () {
    this.a = 1;
    this.b = 2;
}
f.prototype.b = 4;

let oo = new f();

// Encapsulation
// The process of wrapping property and function within a single unit is known as encapsulation. 

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
console.log(employee.getWage());

//Abstraction 
//An abstraction is a way of hiding the implementation details and showing only the functionality to the users.

// Async javascript and callbacks 

// Promise
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const getIds = new Promise(function (resolve, reject) {
    //
    setTimeout(() => {

    }, 1500)
})