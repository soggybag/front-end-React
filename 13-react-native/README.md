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
    
## React native components

React Native supports many of the Components found on mobile. 

### ScrollView 

ScrollView is a component that creates scrolling content. It is very easy to 
use. Keep in mind that ScrollView displays content that overflows the 
ScrollView while the ScrollView itself must limit the area it covers. 
Usually you will want to make sure the view containing the ScrollView takes 
up the whole screen usually this is means that container view has a a flex 
value of 1. Scroll view can horizontal and vertical (set the horizontal prop).

#### Challenge 

Try the ScrollView in your app. 

- Create a ScrollView that contains all of your weather data. 
- Use the Daily forcast data to display in a scrollView. 
- Add daily data to a scrollView set to horizonal.

### Images

Add images to your project folder. To display an image in your app you'll 
need to require it. 

Import the Image component: 

`import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';`

Require the image:

`<Image source={require('../images/Cloud-rain.png')} />`

Here the image file would need to be in a folder named `images` in the root 
of the project. 

#### Challenge

- Import an image and display it as part of your app. 
- Import an image that matches the "icon" for the weather. 

### JavaScipt Dates and formatting

You'll need to format dates. Darkskys provides the date as a Unix Timestamp. 
You will need to convert this to a JS Date. JS time stamps are tracked in 
miliseconds while Uniz Timestamps are tracked in Seconds. 

Make a new Date Object with: 

`new Date()`

Make a new Date Object with a Unix timestamp like this: 

`new Date(timestamp * 1000)`

With a Date object you can produce dates in various default formats, make a custom
date, or extract a feature of the date like the hours, minutes, seconds, day, month, 
or year. 

Take a look at

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

#### Challenges 

- Format the Date provided by DarkSkys. 
    - Use of the default date formats like `date.toLocaleString()`

### Organizing Components

React projects are built on components. With well planned structure and organization 
your projects components will make your projects more flexible and easier to 
manage. Here are a few ideas to make your work easier. 

**Simple vs Stateful components**

Whenever possible use simple components. Simple components have better performance
and are easier to write and maintain. 

**More Smaller components**

As a general rule perfer creating more simple components rather than larger 
monolithic components. This will have the effect of simplifying the process of styles, 
and make your work more modular.

****

