# Middleware

In React middleware sits between Actions and Reducers. Most often you'll 
use middleware when you are executing an asynchonous actions. 

Normally you call an action and it flows through all of your reducers updating application state 
all at once. 

In the case of an action that executes an network request you can't update state until the network 
request is completed. Middleware in Redux does this by holding on to the action until the network 
request has completed, after which it sends the action. 

**Redux Review**

When you invoke an action Redux calls each reducer passing the state and the action to the
reducer. Each Reducer decides whether to make change to state or return state unchanged. This 
happens for each reducer. In this way Redux guarantees that changes to state are complete, 
comprehensive and reproducible. 

**The problem with async (its always a problem with async)**

Imagine the case of an action that wants to perform an aysnchronous task. Redux starts 
calling on your reducers one at a time updating state along the way. If one of the reducers performs
an asynchoronous action, like a network request, we either have to wait until the 
network request is completed, or do nothing and pass state unchanged. The first case creates big 
problems. The second case leaves us with no new state. 

We can use a Middleware to defer updating state until the network request is resolved. Middleware 
sits between dispatching an action and reducer that handles the action. Imagine the middleware 
receiving an action, and holding it while it runs an asynchronous task. When the task is completed
middleware sends the action through the Reducers. 

Here is a more in depth article on Middleware in Redux (read this if you are interested in walking
through the code that makes Middleware work): 

- http://redux.js.org/docs/advanced/Middleware.html

**Functions instead of objects**

In many cases Middleware works by replacing the action object with a function. Normally your action
creators generate action objects. These are objects with a type `{type:"TYPE", ...}`. These pass 
through the middleware. 

To activate the middleware your action creator will pass a function. The middleware will see the 
function and execute it. Often these functions use a promise or closure that returns the action 
object. 

**Thunk**

Middlewares are just code extensions written to handle the situations described above. There are 
several to choose from. The next lesson uses Redux Thunk which is a middleware buuilt for use with 
Redux. 


## Resources 

- http://redux.js.org/docs/advanced/Middleware.html
- https://medium.com/@meagle/understanding-87566abcfb7a#.rr6zcm9uw
- https://github.com/gaearon/redux-thunk
- https://www.codementor.io/vkarpov/tutorials/beginner-s-guide-to-redux-middleware-du107uyud






