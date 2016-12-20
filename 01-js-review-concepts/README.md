# JS Basic Concepts

Knowledge of JavaScript is essential to learning React. React is built entirely in JS and the 
components you create will require JS to make them work. The material presented here is far from 
complete it tries to cover important JS concepts that apply when working with React. 

## Your goals 

Follow the examples [here](./index.html) and complete the challenges at the end. Open the  
example and follow the code contained there for a live example. 

If you feel comfortable solving the challenges move on to the next section. If not follow up the 
reading material to learn more about the material covered here.

- [Example 1 and challenges](./index.html)

## Types 

JavaScript has a few types I'll break them down here as:

- String 
- Number
- Objects

### String 

Like most languages a String is a a "string" of characters. Strings defined with the "" or ''. 

Combine or concatenate strings with the +. 

Notable methods: 

- charAt(index) : Returns character at index.
- substr(start [, length]) : Returns the characters in a string begining at start continuing through length. 

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Number 

A Number is any number float or int, positive or negative. 

Notable methods: 

- isNaN() : Determines of the value is a number. 
- toFixed(points) : Returns a string representing the number with a fixed number of decimal points. 

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Array 

An array is a collection of elements. Elements can be any type and mixed. Array supports many 
methods that manipulate the contents of an array. 

Important properties: 

- length : Returns the count of the array

Notable methods:

- push() : Adds an element to the end of an array
- pop() : Removes the last element from an array and returns it
- shift() : Removes the first element of an array and returns it
- unshift() : Adds one or more items to the front of an array
- concat(array [, array2, ...]) : Merges two or more arrays returns a new array! 
- slice([begin, end]) : Returns a copy of an array containing the items between begin and end

- filter(function) : Returns a new array made up of items for which the function returns true
- map(function) : Returns a new array by applying the function to each item
- reduce(function) : Returns a single value using an accumulator fucntion

Array is a deep subject in JS!

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Objects

Objects are collections of key value pairs. Values in Objects can be anything including functions!

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Functions 

Functions in JS are similar to other languages they take parameters in and return values. 
Functions are also the basis for class objects and define scope.

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

### Review and Reseach

- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

Online tutorials 
- [CodeAcademy JavaScript](https://www.codecademy.com/learn/javascript)
- [JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans)
- 