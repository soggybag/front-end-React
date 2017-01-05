# Redux 

Redux manages application state, it is used with but is not a required part of React. 
Redux is based on Functional Programming. Redux is not easy to grasp at first. At it's core 
Redux uses a simple model of data flow to manage state and state change in your application. 

## Redux - Application State 

Application State represents data that belongs to the Application as a whole. Component State
is held by a single component and represents the state of that component. Application State 
holds data that might be displayed across your entire app and shared acorss many components. 

Imagine you can enter your name in a text field. Your app takes the name and sends it to 
the server, possibly adding you to a mailing list. In this case the textfield component 
might hold the name in Component state. The rest of the app doesn't need to know about your name
since it isn't used anywhere else. This example uses Component State only, there is no need for 
application state. 

Imagine a different example. This time you have a form that asks for your name. After entering your
name the form shows a questionaire where it collects more data in a series of cards. As you 
complete a card a summary of the collected data is shown at the bottom of the screen. In this case 
you need to collect data from sveral components and show that data in other components. You may 
even want to tailor your questions based on previously supplied answers. This example could make 
be a good use case for application state. 

Application State can also be used in cases where your app needs to recreate it's state. Imagine 
situations where the UI needs to be returned to the same configuration when a visitor returns. In this 
case Application State can represent a snapshot of an App that can be reproduced. 

## Simple vs Easy

If you haven't watched this talk you should! This talk compares simple vs easy in software development.
This video is long, if you don't have time to watch it now find some time later. It's well worth it
for the perspective it provides. 

- https://www.infoq.com/presentations/Simple-Made-Easy

(This video has nothing to do with Redux the ideas are good and might give some perspective on Redux)

## Redux Tutorial

This is a great tutorial follow it all the way to the end. Don't miss the notes and cheatsheet at the
bottom of the page!

- https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree 

These videos are by Dan Abramov a co-author of Redux. The videos walk through Redux in a 
meticulous methodical way. Along the way they explain how Redux functions under the hood. 
While the examples here might be a little hard to follow exactly as presented come up with your own 
solutions to follow along. Recreating these examples is your first challenge. 

Besides Redux the videos contain great info on ES6 syntax, advice on software structure, and 
refactoring code. 

It is important that you get all the way to end of these videos. The last few videos cover very 
important concepts. 

- mapStateToProps()
- mapDispatchToProps()
- ReactRedux.connect()
- ReactRedux Provider

# Notes 

While the videos walked through what redux is and how it works going so far as to recreate some of 
it's systems, really it's the last 4 videos that describe how you will using Redux day to day. 

Below I have added some notes to reprise what I thought were import points. 

**State Object**

Redux aggregates all application state into a single JS object. All application state is stored as 
keys on this object. 

This single object becomes a single source of truth for your app. 

State is read only. The only way to change state is through an Action. 

Changes to state are made with pure functions. These functions (reducers) take in the previous state
and return the next state. 

Below is a more nuts and bolts over view of Redux, Providers, Containers, Actions, Reducers, and 
more. 

**Provider**

All Components will need access to the store (Application State). The ReactRedux library gives us 
the Provider Component that simplifies the job of passing store to it's children. 

```
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
```

In this example <Provider /> is a component from ReactRedux, and we are setting the `store` 
property, `createStore()` comes from Redux and you are passing in the results from `combineReducers()`.

This generates a store that is shared with all of the children of Provider, `<App />` in this case 
could be any Component with any number of children. 

**Actions**

When working with Redux you never mutate the data store directly. Instead your UI will
specify the changes that need to be made through Actions and Reducers. 

An Action is a plain JS Object. An action has a type and other properties. The type tells reducers 
what to do with the action, and other properties of the object contain values that might be applied to 
the application state. An action might look like this: 

`{type:'ADD_TODO', name:"name of new todo item"}`

**Action Creator**

In practice you'll use functions to create your Actions. Call these functions Action Creators. An 
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
unchanged, or return a new state. Reducers cannot return a modified state object they must always 
return a new object. For example, the following is a reducer that works with the 
Action above. 

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

In the example above if the action type matches the switch case it returns a new array made from 
state and other properties from the action object. 

If the type is not matched the reducer returns the original state object. 

**Combine Reducers**

Redux needs to call each Reducer when an action is issued to make this easy we use the 
combineReducers() method. This method takes an object as a parameter. Each key will be a key on 
the appliccation state object, the value for each key is the reducer function. 


```
Redux.combineReducer({
    todos: todosReducer,
    user: userReducer
})
```

Here the state object will store todo items in the key: todos, and handle changes with the 
todosReducer function. User data will be stored in the key user, while changes are handled with 
the userReducer method.

**Containers**

Containers are Components that take in application state as props. Containers subscribe to Redux to 
receive notification when Application state changes and updating their props. 

Containers may make changes to Application State by dispatching Actions. This is handled by 
calling an Action Creator. 

**mapStateToProps**

This is a function used to map Application state to component props. The method must take the 
Application state as a prameter and return an object whose properties will be mapped to the props 
object of the container. For example: 

```
function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}
```

The method above accepts application state as a parameter. It returns an object with a property: todos. 
This will map to: `this.props.todos` in the container.

**mapDispatchToProps**

This method binds your action creators to their reducers and the application store. 

This method takes in the dispatch object, and returns the results from calling 
Redux.bindActionCreators(). 

The bindActionCreators method takes two parameters: an object containing your action creators, and 
dispatch. 

For example:

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

**In Practice**

In practice you will combine all of these things together. A container will almost always have

- A Component definition
- mapStateToProps
- mapDispatchToProps
- connect()

## But why? This seems so complicated! 

The beauty of the system is not apparent at first glance. 

Keeping state in a single object in a single location simplifies your work. It's very clear where the 
data is coming from and where it needs to go. 

Application state is treated as immutable. This keeps Rudex free of many of problems that plague 
other systems, removes side effects, and allows Redux and your app to recreate the same state from 
the same data. 

Actions create a clear description of what your app is doing with data. 

Action Creators organize your actions into a single source for each Action type which cleans up your 
code. 

Reducers standardize state changes. Rather than handling state changes in 
different places with different strategies, using a reducer gives you a single location to handle 
changes. A Reducer takes in state along with an action and can decide if the state needs to be 
modified, and either returns the current state or a new state.

The combineReducers method defines the state object and the reducers that will handle changes. This 
is deceptively simple. Since creating a key with a Reducer here will create another key value in 
the application state along with defining a new method for handling changes. 

MapStateToProps is a helper function that takes in the whole Application state and gives you a place 
to map portions of it your are concerned with to the properties of a Component/Container. 

MapDispatchToProps is a helper function that takes in dispatch from Redux and binds an Action creator
to the dispatcher. This is a helper function that creates connections between action creators and 
Redux. 

Redux.connect is a function that applies boiler plate modifications to your Components to turn them 
into Containers. This saves you the trouble of writing code subscribe to subscribe and dispatch. 
Using connect() keeps your code cleaner and easier to read write and maintain. 

## Challenges 

Redux is a tough one to wrap your head around at first. The Functional programming concepts may be 
new to you, and while the system is simple at it's core it has been abstracted to a high degree. 
The best way to get a handle on it is to try some simple ideas to start.

- Recreate the examples from the video tutorial. Build these with a Webpack starter project. 
    - Counter
    - Multiple Counter
    - TodoList
- For more challenge build your own app idea with React and Redux. 
    - This could be a project for product class.

## Resources 

- https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.2zl24daqn
- http://www.jchapron.com/2015/08/14/getting-started-with-redux/
- https://medium.com/front-end-developers/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.mk3tqobs1
- http://redux.js.org/docs/basics/