

// comments in js is done by either
/***  or with double // forward slash and multi line comments are /*** */

// variables declaration in js is similar to C
let variable1;
// const variable2; // const holds the constant data
const variable2 = "Hello world";
var varaible3;

// Data types
let age = 22;
let height = 5.6;
let name = "dilli Hang Rai";
let isChristaine = false;
let isHealthy = true;

// Data - string Concatentation concept in js
let firstname = "dilli";
let middlename = "hang";
let lastname = "rai";

const fullname = firstname + middlename + lastname;

console.log("Full name is " + fullname);

// template literals
// It is also known as a template string.
// It helps to concatenate strings with variables or expressions without the need for string concatenation
const height_weight = `my height is ${height} my age is ${age}`;
console.log(height_weight);

// array in js
let array = ["string", false, 0.234, 4566, null, undefined];
console.log(array);
console.log(array[0]);

// for loop
for (i = 0; i < array.length; i++) {
  console.log(i);
  console.log(array[i]);
}

// while loop
var i = 0;
while (i < array.length) {
  console.log("whilte loop --> " + array[i]);
  i++;
}

let obj = {
  name: "dilli",
  age: 25,
  weight: 65.56,
  isMarried: false,
  bike: null,
  passout: undefined,
};

// for each loop
// obj.forEach(function(item, index){
//     console.log("for each key" + index + "and value is " + item)
// })

// for in loop gives
for (let key in obj) {
  console.log("Key: " + key + ", Value: " + obj[key]);
}

// DOM MANIPULATION
// document.getElementById("height_weight").innerText = height_weight;
var elements = document.getElementsByClassName("username");
elements[0].innerHTML = "  <div>  <h2> Hello I am Dilli Hang Rai </div> ";

document.getElementById("copyright").innerHTML = "<h1> SDFSDF </h1>";


// Array of fruit names
const fruits = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Kiwi", "Lemon", "Mango", "Orange"];

// Get the ul element
const ul = document.getElementById("listing");

// Populate the ul with fruit names
fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  ul.appendChild(li);
});



const example_json = [
    {
        name: "hello",
        age: 25,
        weight: 64.45,
        height: 5.5
    }
]

console.log(example_json);

// try and catch - method
try {
    // Code that might throw an error
    const result = 10 / 0;
    console.log(result);
} catch (error) {
    // Handle the error
    console.error('An error occurred:', error);
}


function hello(){
    alert("Hello i am hello")
}
// event listener
    // Get the input element
    const inputElement = document.getElementById('textInput');
    let inputValue;

    // Add event listener for 'input' event
    inputElement.addEventListener('input', function(event) {
        inputValue = event.target.value;

        // Log the input value to the console
        console.log('Input Value:', inputValue);

        // Save the input value to localStorage
      
    });

    // Load saved text from localStorage on page load
    function save() {
        localStorage.setItem('savedText', inputValue);
        const savedText = localStorage.getItem('savedText');
        
        if (savedText) {
            console.log('Loaded from localStorage:', savedText);
            inputElement.value = ""; // Set input value to the saved text
        }
    };

// Simple JSON Format
[
    {
        "name": "Aakash",
        "age": 20,
        "city": "itahari"
    }
    ]
    
    // Object with Nested JSON Format Object
    [
    {
        "name": "John",
        "address": {
            "city": "New York",
            "zipCode": "10001"
        }
    }
    ]
    
    // JSON Array
    [
        {
            "name": "John",
            "age": 30
        },
        {
            "name": "Jane",
            "age": 25
        },
        {
            "name": "Doe",
            "age": 40
        }
    ]
    
    
    // JSON Array of Objects with Nested Objects
    [
        {
            "name": "John",
            "address": {
                "city": "New York",
                "zipCode": "10001"
            }
        },
        {
            "name": "Jane",
            "address": {
                "city": "Los Angeles",
                "zipCode": "90001"
            }
        }
    ]
    
    // Advanced JSON with Arrays and Mixed Types and it is customizable
    
    [
    {
        "person": {
            "name": "John",
            "age": 30,
            "isStudent": false
        },
        "friends": [
            {
                "name": "Jane",
                "age": 25
            },
            {
                "name": "Doe",
                "age": 40
            }
        ],
        "favorites": {
            "colors": ["red", "blue", "green"],
            "movies": [
                {
                    "title": "Inception",
                    "year": 2010
                },
                {
                    "title": "Interstellar",
                    "year": 2014
                }
            ]
        }
    }
    ]
    
    