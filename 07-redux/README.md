# Redux 

Redux manages application state. It is used with but not a required part of React. You could use 
other systems to store application state with a React app, or use Redux with a non react app. 

Redux is not easy but is simple.  

## Simple vs Easy

If you haven't watch this talk you should! This talk compares simple vs easy in software development. 

- https://www.infoq.com/presentations/Simple-Made-Easy

## Redux Tutorial

- https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree


---------------

# Notes

Redux represents **application state**. Application state is data that belongs to the app as a whole. 
Products for sale, a list of posts, the details about a product, the contents of a post could all 
represent application state. This is different from Component state which represents only the current 
state of that component. Application may be displayed in a Component. Changing the state of a 
Component doesn't change the state of the app. On the other hand changing application state changes 
the app and potentially changes the state of many Components. 

Redux aggregates all application state into a single JS object. Rather than storing data across 
several different elements, imagine multiple variables containing objects, numbers, strings, arrays 
etc. Redux collects all data in a single JavaScript Object. All the pieces of data are stored as 
keys on this object. 

When working with Redux you will never mutate the data store directly. Instead your your UI will
specify the changes that need to be made through Actions and Reducers. An Action specifies 
what needs to change and supply a new value or values. Reducers decide how these changes are applied 
to Application state. Actions are JavaScript Objects, Reducers are functions. 

React acts as the view layer. Redux has the job of holding the data that describes your application. 
While React has the job of displaying that state through Components. React Components also send 
messages asking for changes in state, and pass new data that Redux incorporates into it's state
storage. react never changes the Application state directly. Changes are always applied through 
Actions and Reducers which are managed by Redux. 

**More explanation in these videos**

These videos are by Dan Abramov a co author of Redux. Watch at least the first four videos in the 
series. There is roughly 120 mins of videos that cover the whole of React/Redux usage. These are 
well explained. 

https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?play=yes

**** Need to find an easy way to recreate these examples ****

# Components, Containers, props, state and Application state

Components work with props and state. Props supply static configuration for a component, for simple 
components, this is all that is needed. Some components require state to keep track of an internal 
state, these are smart components. For example a switch needs to know whether it is on or off, a 
a menu might need to know which menu item is currently selected, a group of radio buttons might 
need to keep track of the currently selected button. 

When a component is connected to Application State we will call it a **Container**. Containers want 
to map some piece of Application State to their props to display this state in some way. 

# React Redux (it's a lib) and ReactRedux.connect()

React Redux is a library that conencts React and Redux. This library makes connections between 
components and application state that turns components into containers. The ReactRedux connect method
creates a connection between the the Component/Container and Application State causing the 
Component/Container to update when Application state changes! The connect method requires two pieces
of your code: 

1. A function that maps Application State to props.
2. The React Component to connect to Application State.

The function (1), usually called mapStateToProps(), takes in the application state as a param and 
returns the portion of the state the component/container will use as props. Remember Application 
State is a single JS Object, so this function takes in the entire App State.


- Follow the basics tutorial.
    - http://www.jchapron.com/2015/08/14/getting-started-with-redux/
    - https://medium.com/front-end-developers/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.mk3tqobs1
    - http://redux.js.org/docs/basics/
- Then move on to the advanced tutorial



## Resources 

- https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.2zl24daqn