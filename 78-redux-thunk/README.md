# Redux Thunk

Readux Thunk solves the problem of handling asynchornous actions in Redux. Redux Thunk is
a middleware for Redux. 

In use a Thunk is simple. Action creators normally return an Action Object describing 
the action. When you have an asynchronous action this becomes a problem. You can't return an action
with data because the data hasn't been loaded yet. A thunk hanldes this by passing a function in place
of the object. This function receives the dispatch from Redux and will return the action object when 
the async request resolves.

## Axios 

Axios is library for making XMLHttpRequests from the browser. Use it to load almost any kind of data 
with your React projects. 

- https://www.npmjs.com/package/axios

Add Axios to your project with: 

`$ npm install axios`

Make a request with: 

```
axios.get('/someurl/someendpoint').then((response)=>{
    // do stuff with your data...
}).catch((error)=>{
    // There was an error handle it here...
});
```

Axios makes an HTTP request and handles the request returning a promise. In the example above you'll 
see `.then()` and `.catch()` these methods calls chained on the call to `axios.get()` are called 
when the the promise resolves, with `then()` being called when the promise resolves successfully, 
and `catch()` when the promise resolves with an error. 

So what's a promise? 

## Promise 

A promise is used to handle Asynchronous opperations. Use a promise when an operation may complete 
some time in the future or might not be completed at all. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://www.promisejs.org 

# Example with Redux Thunk

Using a Redux project you might implement Thunk like this.  

Thunk is a middleware for Redux. Add it via applyMiddleWare().

**Main: /index.js**

```
...
import thunk from 'redux-thunk';
...
// Add thunk as middleware 
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
...
```



**actions/index.js**

```
export function fetchStuff() {
    // Make a request with Axios
    const request = axios.get("test.json");
  // Handle the request with Thunk by returning a function. 
  return (dispatch) => {        // Thunk calls the function with the dispatch object.
    request.then((data)=>{      // The request runs and will be resolved with a promise. 
      dispatch({                // When resolved use dispatch to send the Action object.
        type: 'FETCH_STUFF',
        payload: data
      })
    });
  }
}
```

Your reducer doesn't change. The default state can be any type depending on how you want to handle
it. Remember that state will not have a value until some data is loaded. I used a Boolean here 
and checked for the Boolean in component props to help my component know when state data is 
available. 

**reducer.js**

```
export default function stuffReducer(state = false, action) {
  // Check the action type
  switch (action.type) {
    case 'FETCH_STUFF':
      return action.payload.data;
    default:
      return state;
  }
}
```
