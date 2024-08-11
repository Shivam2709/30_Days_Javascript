
const _ = require('lodash');

const text = "hello world";
const capitalizedText = _.capitalize(text);

console.log("Original Text:", text);
console.log("Capitalized Text:", capitalizedText);


const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log("Data received:");
        console.log(response.data);        
    })
    .catch(err => {
        console.log("Error fetching data", err);
        
    })

//Task08
import {other} from './second'

console.log(other());
