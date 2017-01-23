# JS Basic Concepts

Knowledge of JavaScript is essential to learning React. React is built entirely in JS and the React
components you create will require JS to make them work. The material presented here is far from 
complete it tries to cover important JS concepts that apply when working with React only. 

## Types 

JavaScript has a few types I'll break them down here as:

- String 
- Number
- Object

### String 

Like most languages a String is a "string" of characters. Strings are defined with the "" or ''. 

Combine or concatenate strings with the +. 

Notable methods: 

- `charAt(index)` : Returns character at index.
- `substr(start [, length])` : Returns the characters in a string begining at start continuing through 
length. 

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Number 

A Number is any number float or int, positive or negative. 

Notable methods: 

- `isNaN()` : Returns true if the value is NOT a number. (NaN == Not a Number) 
- `toFixed(points)` : Returns a string representation of the number with a fixed number of decimal 
points. 

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Array 

An array is a collection of elements. Elements can be any type and mixed. Array supports many 
methods that manipulate the content of an array. 

Important properties: 

- `length` : Returns the count of the array.

Notable methods:

- `push()` : Adds an element to the end of an array.
- `pop()` : Removes the last element from an array and returns it.
- `shift()` : Removes the first element of an array and returns it.
- `unshift()` : Adds one or more items to the front of an array.
- `concat(array [, array2, ...])` : Merges two or more arrays returns a __new array__! 
- `slice([begin, end])` : Returns a __copy of an array__ containing the items between begin and end.

- `filter(function)` : Returns a __new array__ made up of items for which the function returns true.
- `map(function)` : Returns a __new array__ by applying the function to each item.
- `reduce(function)` : Returns a single value using an accumulator fucntion.

**Array is a deep subject in JS!**

Some of the methods above return a modified array while others return a copy, or a new array. 
Take note of this, it will be important when you get to Redux. 

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Objects

Objects are collections of key value pairs. Values in Objects can be anything including functions!
JavaScript doesn't have classes like other languages. Instead classes are represented by Objects. 

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Functions 

Functions in JS are similar to other languages they take in parameters and return values.

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

## Your goals 

Follow the examples [here](./index.html) and complete the challenges at the end. Open the  
example and follow the code contained there for a live example. 

- [Example 1](./index.html)

If you feel comfortable solving the challenges move on to the next section. If not follow up the 
reading material to learn more about the material covered here. Return to the challenges and finish
them. 

### Challenges 

Try the following challenges to test your knowledge of the JS concepts covered above. The challenges
also appear in comments at the bottom of the example. 
    
- Create a function that takes a name and title and returns an object containing these two properties
The object should look something like: {name: "Rudolf", title: "leader of the pack"}
- Define an array (nameTitle) then push 5 name/title objects from your function.
- Write a function that takes a letter (a, b, c, etc) and returns an array containg all of the
names from nameTitle that begin with that letter. Use array.filter. 
- Write a function takes a title, and returns an array of all objects that have a matching title. 
Use filter again. 
- Write a function that returns an array containing strings made from the names and titles. 
Each string should look like: "Name Title" or "Diana the duchess of york" or something similar. 
Use array.map().
- Create an array of random numbers. Bonus: Use a loop and add 100 random numbers or write a function to return an array of any number of random numbers. 
- Write a function that returns an aray of all numbers 0.5 and above. use filter, map, or reduce. 
- Write a function that returns an array of all numbers below 0.5. Use filter, map, or reduce. 
- Write a function that returns the total of all random numbers. Use filter, map, or reduce. 
- Write a function that returns the average of all of the random numbers. Use filter, map, or reduce. 

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