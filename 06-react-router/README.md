# React Router 

React Router manages which components are displayed based on the current address shown in the URL of 
the borwser. Use it to create multi-page web sites with React. Sites created with React are still 
only a single HTML page. They act as if they are made up of multiple pages through the magic of React 
Router. 

## React Router Tutorial

Follow this tutorial. Covered here is everything we have talked about so far. This tutorial sets up 
a web pack project, and builds a simple React app. This includes React Router to add navigation. 

- https://github.com/reactjs/react-router-tutorial

### **Notes** 

**React.createClass() vs class extends Component**

The source code in the tutorial uses a different approach to creating objects! While it may look
different it's actually the same! 

The examples use `React.createClass()`, for example: 
```
import React from 'react';

export default React.createClass({
    ...
})
```
Where previously we had used class and extends, for example: 
```
import React, {Component} from 'react';

export default class Home extends Component {
    ...
}
```
Notice the import statement! createComponent is a method of React (the default export for the react
module) and Component is a sub module of the react module. 

**export, default**

As part of managing JS defined across several JS files you will define what a file exports. Things 
that are marked export can be accessed by other files through the import key word. 

clock.js - exports a class named 
```
export default Clock extends Component {}
```
home.js - Imports the Clock class as Clock, assuming it's in the same folder.
```
import Clock from './clock';
```

The element marked as `default` can be exported without including it's name. 

Here is another example: 

somefile.js
```
export default class DefaultClass extends Component {}
export class OtherClass extends Component {}
export const ID_NAME = ''
```
You would import these in this way: 

```
import DefaultClass, {OtherClass, id_name} from './somefile'
```

## Challenges 

Once you've finished the tutorial try implementing react router on your own with these challenges. 

- Make a multi-page site. This can be simple with static content. 
- Make a milti-page site using Router where the pages are made up of the previous React tutorial 
projects and challenges.
- Use Router and React to mock up your product class project.
- After finishing any of the above challenges. Add a navigation bar that shows active links. 


