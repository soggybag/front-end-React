# ES6 Concepts 

ES6 is the new version of JavaScript. There is less functional change and lots of new 
syntax. Which means you can do all of the same old things in new ways! 

ES6 is only partially supported in modern browsers, the language itself has not been fully released 
yet. By learning ES6 now you will be ready up to date when it is released. 

### var, let, and const

A small functional and syntactical change in ES6 allows variables to be defined with

- `var` : Nothing new here define a variable. Declared in a function sets the scope of that variable to the function. 
- `let` : This is new, and the same as var except in terms of scope, let scopes variables to the block. Think of a block as all of the between { and }. 
- `const` : Defines a constant. Variables defined const can't be mutated. 

## Fat Arrow functions () => {}

Fat Arrow functions give you a new cincise way to define functions. 

Old function: 

```
function myFunc(param) {}
```

or 

```
var myFunc = function(param) {}
```

New "fat arrow" functions: 

```
myFunc = (param) => {}
```

## Your goals 

Read and examine the example code [here](./index.html). Then try the challenges to check your knowledge. 

- [Example 2 ES6 Syntax](./index.html)

### Challenges 

After reading the material here and looking at the example try these challenges. The challenges
here also appear in comments at the bottom of the example. 

- For each of these challenges use the ideas from this file. Use the "fat arrow functions" 
()=>{} and the ES6 style class defintion.
- Define a class that describes weather data it should take three parameters:
temp, date (use new Date() to make a date object), and description (eg cloudy, rainy etc.)
- Make an array of three weather Objects each with some different values. 
- Use reduce to calculate the average temp for all objects. 
- Use Map to return an array of strings that contain a full description of the weather. 
For example: "03-23-2016 Cloudy 56 degrees" where the info comes from each of the weather objects. 

### Review and Reseach

- [Learn ES6 Harmony](http://learnharmony.org/#/?_k=1udm62)

