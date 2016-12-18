# Single page React Starter

Like the name suggests this is a single page React starter project. Use this as an easy starting 
point for learning React!

This file contains a simple code example that illustrates core React concepts. 

- Simple Components
- Smart Components 
- React DOM Render

## The Sample Code

The sample code contains code that creates a title, and a clock that shows the time and updates 
every second. 

The example is made up two components

- Title - A simple component that displays a text string in an H1
- Clock - A smart component that owns and updates a timer, and displays the time in a Title. 

Near the end of the page there is a call to ReactDOM.render(). ReactDOM keeps track of your 
components in a virtual DOM and renders this to the page. 

## JSX

JSX is an extension of JavaScript that allows HTML expressions to be written in JavaScript. 
JSX must be compiled into standard JavaScript before it is used in the browser. 

JSX in not HTML and has a few differences. 

- Do not use class, instead use className. 
- JavaScript expressions used to generate values used in JSX must be wrapped in {}. 

For more information on JSX: 

- https://facebook.github.io/react/docs/jsx-in-depth.html

## Components 

Components are the building blocks of React. Think of Components as reusable UI elements. 

Component names should always be capitalized! 

## Key Concepts 

- React is made of components. Components are resuable UI elements. 
    - Components can be simple. Simple components are functions that return JSX. 
    - Smart components are Objects that extend the React.Component class. A smart 
    component must implement a render() method that returns JSX. 
- Props are values passed to a component that describe the properties of that 
component. Use props to set the appearance or options for a component. 
    - Pass props in as attributes!
        - Pass a string or use the {} to pass in a JavaScript expression. 
- State is used by smart components to make them stateful. State is owned by the 
component and is used by the component to keep track of values it owns. 
    - You will **never** modify state directly!. Instead you will always set 
    state using the component's setState() method. 
        - Why? For efficiency React only renders components that change. Setting 
        the state of a component will likely change it's appearance. Setting state
        directly does not notify React that the state of a component has changed. 
        Calling the setState() method tells React that state has changed. 
- ReactDOM.render() is used to render React components to the page. 
    - Why? React's great strength is in it's speed and effeciency. React realizes
    a big speed advantage by keep elements in a virtual DOM. By Managing the 
    virtual DOM React can update only the elements that change. The DOM used by 
    the browser is not this effecient.

### Styling components!

Since JSX is mixed with JS some names like: class become ambiguous. Class is used in HTML
as the class name pertaining to your styles, and class is used JS to declare a class object. 
The name: style has similar problems. 

Use "className" in place of class. For example: 

`<Component className="my-class" />`

To assign an inline style to a React component create a JS object containing style property 
names in camel case and their values. For example: 

`<Component style={{color:"red", fontSize:"36px"}} />`

or 

```
const styles = {
    color: "red",
    fontSize: "36px"
};
<Component style={styles} />
```

Both of the above examples are equivalent. 
    
## Challenges 

Try these challenges.

- Make a component that displays a message at any font size and color. 
- Make a timer that counts down from 10 to 0. 
- Make a timer that counts down from any value to 0. 
- Make a timer that counts down from any value at any interval. 
- Make a timer that displays a message while the timer is running, and displays another message 
when the timer  reaches 0. 

        
        
        