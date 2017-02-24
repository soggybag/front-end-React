# React Native

Build for native with React using JavaScript!

- https://facebook.github.io/react-native/docs/getting-started.html

## Overview 

React Native creates a truly native projects that run on React. These are not
hybrid HTML apps. 

As native apps they make use of many of the built in UI objects. As such 
many of the HTML elements are not available. 

Remember that React is built from Components and Components always produce 
a view built from JSX. In React Native you will build Components from JSX 
in the same way but standard HTML tags are not available. Instead you will use 
Component tags that represent native objects. These will have names that are 
similar to UI Components from UIKit.

For example the following are not available. 

- div
- h1-6 
- input 

These while not standard HTML tags are available via the 'react-native' 
package. 

- View
- Text
- ScrollView
- ListView
- Button
- Image
- and more...

The example below provide a couple Components that you can add to a React-Native
project. THese make use of the following React Native Components. 

- Fetch 
- View
- Text

Import these packages like this: 

`import { Text, View } from 'react-native';`

`fetch()` is a global method! 

### Styles 

Styles are handled a little differently. You'll need to make a styleSheet 
object with

```
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    heading: {
        color: 'red',
        fontSize: 24
    }
});
```

Apply styles to any object like this: 

`<Text style={styles.heading}>Hello World!</Text>`


## General Debugging and logging

React Native is using the simulator but not generally running in a development
environment. Most the code is run via JS. This makes debugging a problem. 

In the simulator use command+d to open the menu. Choose: Debug JS Remotely. 
This will send console and error messages to Chrome. You'll need to open 
Chrome and open the console. 

Compilation errors will show in the simulator, while run time errors will
end up in the console. 

## Challenges

- Follow the React-Native getting started guide
    - Install React-Native
    - Create a new project and run it 
- Add the example Components to your project and test each. 
    - Look closely at how components are styled. 
    - Change the some styles to get a feel for how this works. 
        - Set the font color and size. 
        - Set the size and background color of a view. 
- Read the weather.js component carefully. 
- Combine the components to display the weather. 
    - Use a View and Text component to dispay the temp as large text. 