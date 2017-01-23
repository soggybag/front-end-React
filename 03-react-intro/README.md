# React Intro

React is a library made to create User Interfaces in JavaScript Applications. In the context of 
MVC architecture React would represent the V or View layer. 

React apps are built around components. Components represent presentational elements. In other
words Components are things you see on the screen and interact with. Components are composable, 
that is components can contain other components, which can contain still more components. 

React is built around performance. The DOM is slow and inefficient. ReactDOM (a part of React)
creates a virtual DOM where it stores all of the elements that are displayed. Using a 
virtual DOM allows ReactDOM to identify the elements that need to be updated and instructs the 
browser to only update those elements that have changed.

React introduces a new extension to JavaScript: JSX. JSX provides an addition to the JS lanaguage 
that allows you to write HTML tags along side your JS code. 

## Transpile

ES6 and JSX need to be transpiled into vanilla JS before it can be run in the browser. You will 
need a tool for this. 

The example in this section uses uses an in browser process. Later in class we will precompile 
everything using Webpack. 

## JSX 

A big piece of React is JSX. JSX is an extension of the JavaScript language that adds an XML/HTML
like syntax to regular JavaScript. JSX must be compiled before it can be used in a browser.

In short JSX allows you to write HTML like tags alongside vanilla JS. These tags generate React 
HTML code within your React components. 

```
function Display() {
    return <div>Hello World</div>;
}
```

You can see the function above returns a div tag. There is no need for quotes. The tag is not treated 
as a string. This is JSX. The function above could be a simple React Component!

JSX has a few syntactical rules that you will learn along the way. 

In HTML tags are those name value pairs that appear within the opening tag. For example: 

`<div class="foo"></div>`

Class is an attribute foo is the value. 

In JSX attributes are used normally but if you want use execute JS within an attribute use {} around
the value. For example: 

```
var name = "bar";
<div class={bar} width={2 * 100}></div>
```

A React component might be written with JSX and might look like this: 

```
<MyWidget message="Hello World" /> 
```

JSX must always have a top level element. The follow is NOT legal!

```
<Foo>Hello</Foo>
<Bar>World</Bar>
```
The follow would be legal:

```
<div>
    <Foo>Hello</Foo>
    <Bar>World</Bar>
</div>
```

You can write regular HTML tags in JSX. Tags with other names are Components. Components names 
should begin with an uppercase letter!

There are a few special cases where JSX is different from HTML. 

### </>

Tags that don't have a closing tag can be self closing with the /. For example:

`<Clock />`

is the same as 

`<Clock></Clock>`

### {}

When the {} appear in a JSX expression everything in the {} is evaluated as a JavaScript expression. 
For example:


`<MyComponent name={props.name} />`

`<CartTotal total={props.array.reduce((a, b)=>{return a + b})} />`

### Attributes in JSX 

**class**

When applying a class name to a tag use className in place of class (the attribute class collides 
with the JS class keyword).

`<FancyWidget className="fancy-class-name" />`

**Values in quotes**

Quoted values assigned to an attribute are always String literal values. 

`<Mathy notANumber="2+2"></Mathy> // props.notANumber == "2+2"`

`<Mathy numeric={2+2} /> // props.numeric == 4`

**Style**

HTML allows CSS code to be written in the style attribute. In JSX use a JS object with style 
property names in camel case. 

HTML use of style attribute

`<div style="background-color: red; width: 400px"></div>`

JSX uses the style attribute like this: 

`<div style={{backgroundColor:"red", width:"400px"}}></div>`

Same as above but maybe more clear: 

```
const myStyles = {
    backgroundColor:"red", 
    width:"400px"
};
<div style={myStyles}></div>
```

What's going on in the style examples? Style is set as JS Object with style properties named with
JS style property names. 

**return()**

Often you will have a multiline JSX expression to return from a Component. In these cases wrap it 
all in the `(` and `)` and everything is okay!

```
function ComplicatedWidget(props) {
   return ( // <-- 
    <div style={props.color}>
        <Clocky>{this.state.time}</Clocky>
        <ToggleButton title={this.state.isOn} />
    </div>
   );       // <--
} 
```

## Components, props, and state

Components are at the core of React. Components represent resuable UI widgets. Imagine everything
you see in a web page or web application as a Component. Components can be nested, so a complex 
UI element might be made up of several components. 

Components come in two flavors simple and smart or stateful. 

- Simple Components take in values, called props that describe how the component should be 
configured and what it should display. 
    - props is a JS Object: `{name:"joe", age:33}`.
    - Simple Components are written as a function that take props as a parameter and return JSX.

**Simple Component**
```
function Widget(props) {
    return (
        <div>
            {props.message}
        </div>
    );
} 
```

A simple component is just a function that takes props as a prameter and returns JSX. 
    
- Smart Components use props in the same way as simple Components. These Components also keep 
an internal state. Think of state as variables owned by the Component. Changing a Component's 
state causes it to update. 
    - Smart Components are written as a JS Class. With the following features.
        - Take props in the constructor.
        - Implements a render() method that returns JSX. 
        - Must extend React.Component.

**Smart Component** 

```
class SmartWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count = props.intialCount
        }
    }
    
    render() {
        return (
            <div>
                The Count is : {this.state.count}
            </div>
        );
    }
}
```

A smart component is written as a class. It must include a render() method that returns JSX. 

## ReactDOM

ReactDOM supplies a virtual DOM to track your Components. All React Components must be children 
of a top level element that is added to ReactDOM via ReactDOM.render(). ReactDOM also takes an 
HTML element that will the target where it will render it's virtual DOM. In practice this is set 
up once as boilerplate code. 

A typical use of ReactDOM might look like this: 

```
ReactDOM.render(
    <div>
        <Title title="Simple React Starter" />
        <Clock />
    </div>, 
    document.getElementById('app')
);
```

This renders the Title and Clock components. 

## Your goal

Open the [example](./index.html) in a browser and a text editor. 
Read the source code and compare it to the notes here. Then work your way 
through the challenges. 

- [Example React Components Intro](./index.html)

## The Sample Code

The sample code contains two Components: Title and Clock. These are used in the example to create 
a simple clock. 

- Title - A simple component that displays a text string in an H1
- Clock - A smart component that owns and updates a timer, and displays the time in a Title. 

Near the end of the page there is a call to ReactDOM.render(). ReactDOM keeps track of your 
components in a virtual DOM and renders this to the page. 

## Challenges 

Try these challenges.

- Make a component that displays a message at any font size and color. Pass in the size and color
as props. 
- Make a timer that counts down from 10 to 0.
- Make a timer that counts down from any value to 0. 
- Make a timer that counts down from any value at any interval.
- Make a timer that displays a message while the timer is running, and displays another message 
when the timer  reaches 0. Use state to hold the messages. 





