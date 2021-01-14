//Const, let, var
let year = 2021
const score = 5
var days = 1

console.log(year)
console.log(score)
console.log(days)

// String, Numbers, Boolean, null, undefined, Symbol

const name = 'Roman';
const age = 32;
const isCool = true;
const rating = 2.5;
const x = null;
const y = undefined;
let z;

console.log(typeof name)

//------------------------------------------------------------
const newName = 'John';
const newAge = 33;
//Concatenation
console.log('My name is ' + newName + ' and I am ' + age);
//Template String
console.log(`My name is ${newName} and I am ${newAge}`);
const hello = `My name is ${newName} and I am ${newAge}`;
console.log(hello)

//------------------------------------------------------------
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 7));
console.log(s.substring(0, 7).toLowerCase());
console.log(s.split(''));

const countries = 'USA, Canada, Poland, Ukraine, UAE';
console.log(countries.split(', '));

//------------------------------------------------------------
//Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['Apple', 'Lemon', 'Qiwi', 'Avacado'];
console.log(fruits.length);
console.log(fruits[1]);
fruits[3] = 'Grapes';
console.log(fruits);
fruits.push('Mango');
fruits.unshift('Strawberry');
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('Apple'));

//------------------------------------------------------------
//Object literals (key-valur pairs)
const person = {
    firstName: 'Roman',
    lastName: 'Lytvynenko',
    age: 32,
    hobbies: ['books', 'music', 'sports'],
    address: {
        street: '50 main st.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]);
//Destructure
const { firstName, lastName, address: {city} } = person;
console.log(firstName);
console.log(city);
//adding properties
person.email = 'rletvik@gmail.com';
console.log(person);

//------------------------------------------------------------
//Arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isComplete: false
    }
];

console.log(todos);
console.log(todos[1].text);

//------------------------------------------------------------
//JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//------------------------------------------------------------
//Loops
//For

for(let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
}

//While
let i = 0;
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

//Itteration through an array
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//the same as above (simple way)
for (let todo of todos) {
    console.log(todo.id);
}

//High order array methods

//forEach
todos.forEach(function(todo){
    console.log(todo.isComplete);
});

//map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isComplete == true;
});
console.log(todoCompleted);
//---
const todoCompletedMap = todos.filter(function(todo){
    return todo.isComplete == true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompletedMap);

//------------------------------------------------------------
//Conditionals
// == - without matching data types, === - with matching data types; || &&
const x1 = 9;
if(x1 === 10) {
    console.log('x1 is 10');
} else if (x1 > 10) {
    console.log('x1 is greater than 10');
} else {
    console.log('x1 is less than 10');
}

//Ternary operator
const x2 = 10;
const color = x2 > 10 ? 'Red' : 'Blue';
console.log(color);

//Switch
switch(color) {
    case 'Red':
        console.log('the color is red');
        break;
    case 'Blue':
        console.log('the color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

//------------------------------------------------------------
//Functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(1,2);

function addNums1(num1, num2) {
    return num1 + num2;
}
console.log(addNums1(2,5));

//Arrow functions

const addNums2 = (num1, num2) => {
    return num1 + num2;
}
console.log(addNums2(4,5));

const addNums3 = (num1, num2) => num1 + num2;
console.log(addNums3(4,8));

const addNums4 = num1 => num1 * 5;
console.log(addNums4(8));

//------------------------------------------------------------
//OOP Pre-classes ES5
//Constructor function
function Person(firsName, LastName, dob) {
    this.firsName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firsName} ${this.lastName}`;
    // }
}
//Prototypes
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firsName} ${this.lastName}`;
}

//Instantiate object
const person1 = new Person('Roman', 'Lytvynenko', '11-19-1988');
const person2 = new Person('Iryna', 'Lytvynenko', '03-15-1990');
console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());

//------------------------------------------------------------
//Class ES2015 or ES6, the same as above, syntax sugar
class NewPerson {
    constructor(firsName, LastName, dob) {
        this.firsName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firsName} ${this.lastName}`;
    }
}

const person3 = new NewPerson('Marharyta', 'Lytvynenko', '06-14-2018');
const person4 = new NewPerson('Iryna', 'Lytvynenko', '03-15-1990');
console.log(person3);
console.log(person4.dob.getFullYear());
console.log(person3.getBirthYear());
console.log(person4.getFullName());

//------------------------------------------------------------
//DOM
//Single element selectors

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

//Multiple element selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//Manipulating the DOM
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Roman';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//Events (click, mouseover, mouseout, and more...)
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     //console.log('click');
//     //console.log(e);
//     //console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hey hey</h1>';
// });

//------------------------------------------------------------
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout( () => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}