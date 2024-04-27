// https://fakestoreapi.com/docs
// Sample object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
  };
  
  // Object destructuring syntax to extract specific properties
  const { firstName, lastName, age } = person;
  
  // Accessing and using the extracted properties
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Age:', age);


  // Sample function that returns an object
function extractWordDetails(wordDetails) {
    return {
        meanings: ["definition1", "definition2", "definition3"],
        antonyms: ["antonym1", "antonym2", "antonym3"],
        synonyms: ["synonym1", "synonym2", "synonym3"]
    };
}

// Sample object containing word details
const wordDetails = "exampleWord";

// Object destructuring to extract specific properties
const { meanings, antonyms, synonyms } = extractWordDetails(wordDetails);

// Accessing and using the extracted properties
console.log("Meanings:", meanings);
console.log("Antonyms:", antonyms);
console.log("Synonyms:", synonyms);




// Sample JSON object
const jsonData = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

// Using Object.keys() to get an array of keys
const keys = Object.keys(jsonData);

// Output the array of keys
console.log(keys); // Output: ['key1', 'key2', 'key3']

// Sample word details object
const wordDetails = {
    ANTONYMS: ['opposite1', 'opposite2', 'opposite3']
};

// Sample antonyms array
const antonyms = ['existing1', 'existing2'];

// Using push() method with spread syntax to add elements from wordDetails.ANTONYMS to antonyms array
antonyms.push(...wordDetails.ANTONYMS);

// Output the updated antonyms array
console.log(antonyms); // Output: ['existing1', 'existing2', 'opposite1', 'opposite2', 'opposite3']



[
    ["Noun", "the 1st letter of the Roman alphabet", ["Letter", "Letter of the alphabet", "Alphabetic character"], []],
    ["Noun", "the blood group whose red cells carry the A antigen", ["Blood group", "Blood type"], []]
]

[
  ("Noun, the 1st letter of the Roman alphabet, Letter, Letter of the alphabet, Alphabetic character",
  "Noun, the blood group whose red cells carry the A antigen, Blood group, Blood type")
];



const meanings = [];

// Iterate over each element in the array
for (const meaning of meaningsArray) {
    // Extract parts of speech and definition
    const partOfSpeech = meaning[0];
    const definition = meaning[1];
    
    // Extract synonyms
    const synonyms = meaning[2];
    
    // Extract antonyms (which is an empty array)
    const antonyms = meaning[3];
    
    // Construct a string representation
    const meaningString = `${partOfSpeech}: ${definition}. Synonyms: ${synonyms.join(", ")}.`;
    
    // Push the string representation into the meanings array
    meanings.push(meaningString);
}

// Output the extracted details
console.log(meanings);
