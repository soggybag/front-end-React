# Redux and Local Storage

Local storage allows you to save data locally on a device. Use this when you want to save data 
locally with a device and that data doesn't need to be shared. This would be good for things like
app preferences, personal info, and data that is specific to an instance of the app like

- Tasks in a todo app
- Contacts in an address book
- Your saved preferences and current progress in a game

Local Stroage is a vanilla JavaScript feature that saves key values locally. It can store primitive
types like strings and numbers. Since JavaScript Objects can be converted to JSON and JSON is 
really just a String you can save your Redux store as to local storage. 

## localStorage

Local Starage is a feature that allows you to save data locally. This is similar to a cookie or a 
session, though local storage is not cleared when a browsing session is ended. Data is 

### localStorage.setItem("key", value)

### localStorage.getItem("key")

## JSON

### JSON.parse()

### JSON.stringify()





The tutorial here covers a working system to save the Redux store to local storage in 4 short 
videos, less than 15 mins. Then follows this up with a larger discussion of the subject. 

- https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

## Challenges

- Use local storage to persist your Redux store. Your app should be able to restore it's state 
after a browser refresh. 
