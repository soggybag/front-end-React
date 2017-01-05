# Middleware

Middleware is code you can place between your framework receiveing a request and the service 
generating a response. In React middleware sits between Actions and Reducers. Most often you'll 
use middleware when you are executing an asynchonous action. 

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
sits between dispatching an action and reducer that handles the action. 

Here is a more in depth article on Middleware in Redux (read this if you are interested in walking
through the code that makes Middleware work): 

- http://redux.js.org/docs/advanced/Middleware.html

**Many Middlewares**

Middlewares are just code extensions written to handle the situations described above. There are 
several to choose from. 



