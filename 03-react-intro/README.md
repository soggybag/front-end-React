# React Intro

React is a library made to create User Interfaces in JavaScript Applications. 

React is built around performance. The DOM is slow and inefficient. ReactDOM (a part of React)
creates a virtual DOM where it keeps track of all of the elements that are displayed. Using a 
virtual DOM allows ReactDOM to identify the elements that need to be updated and instruct the 
borwser to only update those elements. 

## JSX 

A big piece of React is JSX. JSX is an extension of the JavaScript language that adds an XML/HTML
like syntax to regular JavaScript. JSX must be compiled before it can be used in a browser. 

Attributes are used to pass values into a JSX element. These values are attached to props (see 
Components below for more about props).

JSX might look like this: 

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

`<Mathy notANumber="2+2"></Mathy> // props.notANumber = "2+2"`

`<Mathy numeric={2+2} /> // props.numeric = 4`

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

**return()**

Often you will have a multiline JSX express to return from a Component in these cases wrap it 
all in the ( and ) and everything is okay!

```
function ComplicatedWidget(props) {
   return (
    <div style={props.color}>
        <Clocky>{this.state.time}</Clocky>
        <ToggleButton title={this.state.isOn} />
    </div>
   ); 
} 
```

## Components 

Components are at the core of React. Components represent resuable UI widgets. Imagine everything
you see on web page or web application as a Component. Components can be nested, so a complex 
UI element might be made up of several components. 

Components come in two flavors simple and smart (or stateful). 

- Simple Components take in values, called props that describe how the component should be 
configured and what it should display. 
    - props is always a JS Object
    - Simple Components are written as a function that take props as a parameter and return JSX. 
- Smart Components use props in the same as simple Components. These Components also keep 
an internal state. Think of state as variables owned by the Component. Changing a Component's 
state causes it to update it's appearance. 
    - Smart Components are written as a JS Class. With the following features.
        - Take props in the constructor
        - Implements a render() method that returns JSX. 
        - Must extend React.Component

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

## ReactDOM

ReactDOM supplies a virtual DOM to track your Components. All React Components must be a children 
of a top level element that is added to ReactDOM via ReactDOM.render(). ReactDOM also takes an 
HTML element that will the target where it will render it's virtual DOM. In practice this is set 
up once as boilerplate code and forgotten about. 

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




