# React Router 

React Router manages components based on the current address shown in the URL bar. Use it to 
crate multi-page web sits with React. Really these will still only be a single HTML page. 
But they will change content as if they are made up of multiple pages through the magic of 
JavaScript and React. 

## React Router Tutorial

Follow this tutorial. Covered here is everything we have talked about so far. This tutorial set up 
a web pack project, and builds a simple React app. This includes React Router to add navigation. 

- https://github.com/reactjs/react-router-tutorial

**Notes** 

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



## Notes 

