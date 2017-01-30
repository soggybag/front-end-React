# Styling Components

React is relaly good at producing standard HTML, how best to apply styles to React components does 
not have an obvious answer. Depending on your goals you might choose one strategy over another. 
Here I will outline some solutions. 

## Plain old CSS

You can use plain old CSS. TO do this assign class names in the JSX when creating elements. 
Remember that you'll have to use `className` rather than `class` within JSX.  For example: 

`<Header className="header-dark" />`

Or with in the JSX returned from a component your styles might look like this: 

```
function Header(props) {
    return (
        <div className="header">
            <NavBar className="header-nav-bar" />
            <StatusDisplay className="header-status" />
        </div>
    );
} 
```

Using this method you'll need to define your styles somewhere and make sure they are associated with 
your page. 

## Using inline styles 

Styles can be applied inline. This is not a favorite choice of old school web developers. That said
inline styles works well with React components, especially when you want to configure the style of
a component from props. 

To apply styles remember that while JSX looks like HTML, it is really JS. All CSS properties have 
equivalent property names in JS, these are just the same name converted to camel case. Here are a 
few examples: 

- background-color -> backgroundColor
- font-size -> fontSize
- text-aling -> textAlign
- line-height -> lineHeight
- color -> color
- etc.

You get the idea. These names are part of vanilla JS! Nothing special here, you could apply them 
with something like: 

`document.getElementById("nav-bar").style.backgroundColor = "#454545";`

You can apply inline styles to any component like this: 

```
const styles = {color:"red", bacgroundColor:"black"}
<StyledComponent style={styles} />
```

You can pass an object with styles into a component via props:

```
function Title(props) {
    return (
        <h1 style={props.styles}>
            {props.title}
        </h1>
    );
}

// You might render this component as:

<Title title="Hello World" styles={{color:"white", background:"#333"}} />
```

You can also easily assign a component default styles and overwrite these via props. This 
technique uses the ES6 spread operator with an object. 

```
function Title(props) {

    const styles = {color:"red", fontSize:"18px", fontFamily:"Georgia", ...props.styles};

    return (
        <h1 style={styles}>
            {props.title}
        </h1>
    );
}

// ... Render the component 
<Title title="Hello" styles={{fontFamily:"Helvetica"}} />
```

In the example above the component is rendered and the `fontFamily` 






https://m.alphasights.com/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b#.jhiovdefw