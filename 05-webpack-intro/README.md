# Webpack Intro

Webpack is a "module bundler". Webpack takes modules with dependencies and generates static assets 
representing those modules. In other words Webpack preprocesses your files and combines them into
fewer files that will run your web app. 

Weppack works with NPM packages. These are small libraries each containing a snippet of code.
A package might contain a small snippet of code along with a link to another package that it 
depends on. You can see all of the package in the node_modules folder. 
When building a project Webpack will combine all of these files into a single JS file that your
production app will use.

For more info read this: http://webpack.github.io/docs/what-is-webpack.html 

## Webpack tutorial 

Follow the tutorial below. This tutorial walks you through setting up Webpack to work with React. 
It also explains many of the things that Webpack is doing along the way. 

To follow the tutorial you will use Node Package Manager or NPM. To use NPM you need to install Node. 
Follow the guide here it will walk you through all of the steps. 

- https://docs.npmjs.com

Once you have npm installed follow this tutorial on Webpack.

- https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr

### Notes

**If you have trouble with .babelrc**

Files that begin with a . are hidden! This makes it tough to edit these files once they are created! 
Here are a couple strategies you can use. 

- Show hidden files: https://www.google.com/#safe=off&q=terminal+show+hidden+files
- Create the file as babelrc (without the .) set the text, then add the . to the beginning of the file 
name. 
- Use `$ open .babelrc` in the terminal to open the file. 

**entry: APP_DIR + '/index.jsx' and the .jsx extension**

The .jsx extension is not recognized by many code editors. While it might feel more accurate to use
the .jsx extension on files that contain jsx code, the .js extension works also, and might work 
better for your work flow and tools. 

webpack.config.js: `entry: APP_DIR + '/index.js'`

If you do this you need to rename `index.jsx` to `index.js`!

**UNMET PEER DEPENDENCY babel-core@^6.0.0**

If you see this error when running `npm i react react-dom -S` try: 

`npm i babel-core`

You may have to run `npm i react react-dom -S` again.

(The i stands for install, `npm install babel-core` is the same as `npm i babel-core`)

## Deconstructing the Tutorial

What happened here? Take a look at the folder you created and examine the contents. 

**package.json**

- This file is written in json, it holds the project configuration for Node. 
Open it and look at the contents. 
    - It contains some meta info:
        - name
        - version
        - description
        - etc.
    - Next there is a list of dependancies. This is a list source files you'd like Node to manage. 
    - Last you'll see scripts. This is a list of commands you can have Node run for you. In place 
    of typing `webpack -d --watch` you can use `npm dev`. Convenient!
    - For more info on package.json: https://docs.npmjs.com/files/package.json

**webpack.config.js**

- This file is written in JavaScript. Open it up and take look. 
    - **"entry"** names the app directory. This is where your production build will live. 
        - Take a look at src/client/app. Here you'll find index.js along with your components. 
        - Reconcile this with the APP_DIR of `src/client/app` above.
    - **"output"** names the file that will hold the compiled JS file.  
        - Find bundle.js in `src/client/public`
        - Reconcile this with BUILD_DIR of `'src/client/public'` above.
        - Take a look at bundle.js. This is all JS but it's been compiled minified and uglified. 
            - All of the code was collected and combined (**compiled**) from JS source files .
            - All of the white space was removed (**minified**).
            - Identifiers were shortened to letter names (**uglified**). 
    - For more info on configuration: https://webpack.github.io/docs/configuration.html
- **node-modules** - This folder contains all of the dependancies your project uses. These are JS files 
used by the project, or files used by Node and Webpack. These files might include: 
    - React, and ReactDOM js files, jQuery and other libraries your project might be using. 
    - Loaders/Preprocessors - These are files that minify and uglify our JS, and preprocess our scss 
    files. 
    - Watchers and servers - These are files that run the local Node server, and watch for changes to 
    project files and run the preprocessor when changes occur. 
    - Look in node_modules you should see lots of files. Everytime you used npm install or npm i
    npm copied files to this folder, often a library will require other libraries. Which explains why 
    you imported 3 or 4 things but the folder contains thousands of files! When importing a package
    the package names dependancies it has and NPM finds and donwloads those for you. 
    
## Import

After working through the short React portion of the tutorial above you may have noticed some new 
syntax using: import, export, and default. These are used with the bundling system. Open index.js. 

```
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';

class App extends React.Component {
  render () {
    return (
        <div>
            <p>New and Improved</p>
            <AwesomeComponent />
        </div>);
  }
}

render(<App/>, document.getElementById('app'));
```

Take a look at the first line: `import React from 'react';`

This imports the default item from 'react.js'. Since this file is in the node_modules folder you do 
not need to include a path. 

Look at line 2: `import {render} from 'react-dom';`

Similiar to the first line this time you importing an item named 'render' from 'react-dom.js'. 

Imported items can be variables, functions (class objects). 

Consider this change: 

```
import React, {Component} from 'react'; // Added {Component} 
import AwesomeComponent from './AwesomeComponent.js';

class App extends Component { // Removed React. here
  render () {
    return (
        <div>
            <p>New and Improved</p>
            <AwesomeComponent />
        </div>);
  }
}
```

Here you imported React (default), and Component (a sub module of React). Notice 
`class App extends Component`, now you only need Component in place of React.Component. 

## Webpack Dev Server

Webpack Dev Server is a local web server that you can easily add to your Webpack projects. Use it to
test your projects locally before deploying to a live web host. Read more here: 

- https://webpack.github.io/docs/webpack-dev-server.html

When you ran Webpack dev server in the previous example, Webpack created files in `src/client/`.
This is the path for your production app. Then started the Webpack local server. Run the 
line below in the console. 

`webpack-dev-server --content-base src/client/`

Now visit: `http://localhost:8080`. This should serve your web site.

## Webpack React Challenge

Once you've worked through the Webpack tutorial try these challenges: 

- Try installing the Webpack Hot Loader: http://gaearon.github.io/react-hot-loader/getstarted/
- Use the Webpack project to rebuild one of the earlier projects. 
- Follow this tutorial it covers everything we've talked about: 
https://medium.com/wdstack/dont-be-afraid-of-react-library-guide-81f673d24684#.m832qcdcu

## Webpack React Boilerplate/Starter

The whole process of setting up Webpack is a little involved. Understand that you shouldn't have to 
do it for every new project, unless you want to! 

You can create the Webpack example above and save it 
as a starter project for future projects. In this case **You can delete the node_modules folder**. 
This allows you to store your starter project with out all of the dependancies. When starting a new 
project copy the folder, navigate the new folder in the terminal and run `npm install`, npm will 
download and install of the dependancy files again. 

Use one of the many provided by the open source community. You should read the notes and pay attention 
but, generally they will work in the same way as described above. Here a few that I found: 

- https://github.com/erikras/react-redux-universal-hot-example
- https://github.com/nicksp/redux-webpack-es6-boilerplate
- https://github.com/davezuko/react-redux-starter-kit
- https://github.com/StephenGrider/ReduxSimpleStarter

## Resources

- More React + Webpack Tutorials
    - https://medium.com/wdstack/dont-be-afraid-of-react-library-guide-81f673d24684#.m832qcdcu
- http://webpack.github.io/docs/what-is-webpack.html
- https://blog.risingstack.com/using-react-with-webpack-tutorial/
- https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr

