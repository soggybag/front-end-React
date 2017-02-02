# React Firebase

Combine React with Firebase. 

- https://firebase.googleblog.com/2014/05/using-firebase-with-reactjs.html
- https://www.npmjs.com/package/firebased
- https://github.com/nemanja-stanarevic/firebase-promisified

## Firebase and React in a nutshell

Firebase is a real time web service. It can act as a database and handle persistent web connections 
that push data to a client. Besides storing an retreiving data Firebase will notify clients of an 
update when it occurs without requiring a page refresh. 

To use Firebase you will need to create an account and create a Firebase project to connect to. 
Follow the instructions here: 

- https://firebase.google.com

Start with a simple React project. You can use the single page starter or create a starter project 
with Webpack. In either case you'll need to add the Firebase JS to your project. Your choice of 
starter projects will determine how you do this. 

- Navigate to your Firebase Project. 

If you are using Webpack import Firebase with npm. 

`$ npm install --save firebase`

To work with Firebase you will need to authenticate your app with Firebase. Click the 

> Add Firebase to your web app button. 

If you are using the single page starter you can copy and paste the code snippet. 

If you are using web pack just copy the initialization code in the script tag. You won't need the 
script tags. Add the following to your app.js, or top level React Component file. 

```
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "<YOUR API KEY>",
  authDomain: "<AUTH DOMAIN>",
  databaseURL: "<DATABASE URL>",
  storageBucket: "<STORAGE BUCKET>",
  messagingSenderId: "<MESSAGING SENDER ID>"
};
firebase.initializeApp(config);
```
Notice this is mostly the code from the configuration snippet. 

**Make a Firebase component**

Create the component below from the sample code. This component loads data from Firebase using the 
key: `items`. You'll need to create and element named: `items` or change the name in the code snippet.

`var items = firebase.database().ref('items/')`

```
import React, {Component} from 'react'
import firebase from 'firebase'

export default class SimpleFire extends Component {
  constructor(props) {
    super(props)

    this.state = {items:[]}
    var items = firebase.database().ref('items/')
    items.on('value', this.onItems.bind(this))
  }

  onItems(snapshot) {
    var data = snapshot.val();
    var items = [];
    for (var i in data) {
      items.push(`${i} ${data[i].data}`)
    }

    console.log(this);
    this.setState({items:items});
  }

  render() {

    const items = this.state.items.map((item, i)=>{
      return <li key={i}>{item}</li>
    })

    return (<div>
      Simple Fire
        <ul>{items}</ul>
      </div>)
  }
}
```





