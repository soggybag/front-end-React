# Redux 

Redux manages application state, it is used with but is not a required part of React. 
Redux is based on Functional Programming. Redux is not easy to grasp at first. At it's core 
Redux uses a simple model of data flow to manage state in your application. 

## Application State 

Application State represents data that belongs to the Application as a whole. Component State
is held by a single component and represents the state of that one component. Application State 
holds data that might be displayed across your entire app and shared acorss many components. 

Imagine you can enter your name in a text field. If your app were to take the name and send it to 
the server, possibly adding your name to a mailing list. In this case the textfield component 
might hold the name as Component state. The rest of the app doesn't need to know about your name
since it isn't used anywhere else. This example uses Component State and no need for Application
State. 

Imagine a different example. This time you have a form that asks for your name. After entering your
name the form shows a questionaire where it collects more data in a series of cards. As you 
complete card a summary of the collected data is shown at the bottom of the screen. In this case 
you need to collect data from components and show that data in a series of components. You may 
even want to tailor your question based on previously supplied answers. This is an example where
Application State could be used. In this case you have data collected that needs to be displayed 
in other components, and components that need access to data from previous components. 

Application State can also be used in cases where your app needs to recreate it's state. Imagine 
situations where the UI needs to be returned to the same state when a visitor returns. In this 
case Application State can represent a snapshot of an App at any moment. 

## Simple vs Easy

If you haven't watched this talk you should! This talk compares simple vs easy in software development.
This video is long, if you don't have time to watch it now find some time later. It's well worth it
for the perspective it provides. 

- https://www.infoq.com/presentations/Simple-Made-Easy

## Redux Tutorial

This is a great tutorial follow it all the way to the end. Don't miss the notes and cheatsheet at the
bottom of the page!

- https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree 

These videos are by Dan Abramov a co-author of Redux. The videos walk through Redux in a 
meticulous methodical way. Along the way they explain how Redux functions under the hood. 
While the examples here might be a little hard to follow exactly as presented come up with your own 
solutions to follow along.

Besides Redux the videos contain great info on ES6 syntax, advice on software structure, and 
refactoring code. 

It is important that you get all the way to end of these videos. The last few videos cover very 
important concepts. 

- mapStateToProps()
- mapDispatchToProps()
- ReactRedux.connect()

# Notes 

**State Object**

Redux aggregates all application state into a single JS object. All the pieces of data are stored as 
keys on this object. 

** Actions **

When working with Redux you never mutate the data store directly. Instead your UI will
specify the changes that need to be made through Actions and Reducers. 

An Action is a plain JS Object. An action has a type and other properties. The type tells reducers 
what to do with the action, and the other properties contain values that might be applied to the 
application state. An action might look like this: 

`{type:'ADD_TODO', name:"name of new todo item"}`

In practice you'll use functions to produce your Actions. Call these functions Action Creators. An 
Action Creator returns an Action. An example Action Creator that produces the Action above might 
look like this: 

```
function addTodo(newName) {
  return {
    type: 'ADD_TODO',
    name: newName
  }
}
```

**Reducers**

Reducers are functions that take in application state and either return the Application State 
unchanged, or return a Modified copy of the Application state. For example, the following might 
be a reducer that works with the Action above. 

```
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {text:action.payload, completed:false}];
    default:
      return state;
  }
}

```

The Reducer must return state. If the state is not modified you can return the state that was passed 
into the function. This happens at default in the switch statement. If the reducer matches the action
type, see the first case in the switch, and modifies the state, it must return a new state object. 
It should not modify state and return the modified object. The example above makes a new array from 
state, adding a new object, and returns this new array. 

Last, a reducer should return a default value. In the example, state is assigned an empty array as a
default value. 

**Combine Reducers**

This Redux method collects your reducers and defines their Key in the Application State. It takes 
a single object as a parameter. With this Object you define a key and a reducer function. The key 
will be the key that stores the piece of Application state that the reducer function will work 
with. Using the example above: 

```
Redux.combineReducer({
    todos: todosReducer
})
```

Here the state object will store todo items in the key: todos, and handle changes with the 
todosReducer function. 

**Containers**

Containers are components that take in and display values from Application state. Containers will 
update when Application State changes. Containers subscribe to Redux to receive notification when 
Application state changes. 

Containers may also make changes to Application State by dispatching Actions. This is handled by 
calling an Action Creator. 

**mapStateToProps**

This is a function used to map Application state to component props. A mapStateToProps method can be
added to any container and assigned any name (it doesn't have to be called mapStateToProps). The 
method must take the Application state as a prameter. It returns an object that will be the props
for the Container. For example: 

```
function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}
```

Here we take in the entire Application state, and return an object with just the todos from that state. 

**mapDispatchToProps**

This method makes it possible for your Containers to modify Application state by dispatching Actions. 
Again mapDispatchToProps could be any name. The method must take in the dispatch object, and return 
the results from calling Redux.bindActionCreators(). The bindActionCreators method takes two 
parameters: an object containing your action creators, and dispatch. For example: 

```
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo:addTodo}, dispatch);
}
```

In this example the Action is addTodo (the name of the Action Creator above). The key value must match
the name of the action!

**ReactRedux.connect()**

The connect function creates a container from the mapStateToProps, mapDispatchToProps, and your
component. 

`connect(mapStateToProps, mapDispatchToProps)(TodosList);`

Assuming TodoList was a component you defined this would return a Container. Really the container is 
the Component that has been connected to the Redux store. The connect method took mapStateToProps,
mapDispatchToProps, and the original component (TodoList) and subscribed to store, and arranged the 
dispatcher to send messages from this component to your Action Creators. 

Note! The connect method is part of another library: react-redux.js. 

## Resources 

- https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.2zl24daqn
- http://www.jchapron.com/2015/08/14/getting-started-with-redux/
- https://medium.com/front-end-developers/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.mk3tqobs1
- http://redux.js.org/docs/basics/