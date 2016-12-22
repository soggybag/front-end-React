# Webpack Intro

Webpack is a "module bundler". webpack takes modules with dependencies and generates static assets 
representing those modules. In other words Webpack preprocesses your files and combines them into
fewer files that will run your web app. 

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

Files that begin with a . are hidden! This makes it tough to edit this file once it's been created! 
There are a couple strategies you can use. 

- Show hidden files https://www.google.com/#safe=off&q=terminal+show+hidden+files
- create the file as babelrc (without the .) set the text, then add the . to the beginning of the file name. 
- You can also use `$ open .babelrc` in the terminal. 

**entry: APP_DIR + '/index.jsx'**

The .jsx extension is not recognized by many code editors. While it might feel more accurate to use
the .jsx extension on files that contain jsx code, the .js extension works also, and this might work 
better for your work flow and tools. 

webpack.config.js: `entry: APP_DIR + '/index.js'`

If you do this you need to rename `index.jsx` to `index.js`!

**UNMET PEER DEPENDENCY babel-core@^6.0.0**

If you see this error when running `npm i react react-dom -S` try: 

`npm i babel-core`

You may have to run `npm i react react-dom -S` again. 



## Deconstructing the Tutorial

What happened here? Take a look at the folder you created and examine the contents. 

- **package.json** - This file is written in json, it holds the project configuration for Node. 
Open it and look at the contents. 
    - It contains some meta info.
    - Next there is a list of dependancies. This is a list source files you'd like Node to manage. 
    - Last you'll see scripts. This is a list of commands you can have Node run for you. In place 
    of typing `webpack -d --watch` you can use `npm dev`. Convenient!
    - For more info on package.json: https://docs.npmjs.com/files/package.json
- **webpack.config.js** - This file is written in JavaScript. Open it up and take  look. 
    - Names the app directory. This is where your production build will live. 
        - Take a look at src/client/app. Here you'll find index.js along with your components. 
        - Reconcile this with the APP_DIR of `src/client/app` above.
    - output names the file that will hold the compiled JS file.  
        - Find bundle.js in `src/client/public`
        - Reconcile this with BUILD_DIR of `'src/client/public'` above.
        - Take a look at bundle.js. This is all JS but it's been compiled minified and uglified. 
            - All of the code was collected from JS source files
            - All of the white space was removed.
            - Identifiers were shortened to letter names. 
    - https://webpack.github.io/docs/configuration.html
- **node-modules** - This folder contains all of the dependancies our project uses. These are JS files 
used by our project, or files used by Node and Webpack. These files might include: 
    - React, and ReactDOM js files, jQuery and other libraries our project might be using. 
    - Loaders/Preprocessors - These are files that minify and uglify our JS, and preprocess our scss 
    files. 
    - Watchers and servers - These are files that run the local Node server, and watch for changes to 
    project files and run the preprocessor when changes occur. 
    - Look in node_modules you should see lots of files. Everytime you used npm install or npm i
    npm copied files to this folder, often these files require other files, npm takes care this. 
    
## Import, Export, Default

After working through the short React portion of the tutorial above you may have noticed some new 
syntax using: import, export, and default. These are used with bundling system. Open index.js. 

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

This creates a var named React that holds the react.js code. It imports the react.js library from 
'react', the path here refers to 'node_modules/react'. You don't have to include folder path for 
files in 'node_modules'. 

Look at line 2: `import {render} from 'react-dom';`

Similar to line with a small differnce. Here the variable render is just one method of 'react-dom' 
and you are including only this method. 

Consider this change: 

```
import React {Component} from 'react'; // Added {Component here}
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

Here you imported React, and Component (a sub module of React). Notice `class App extends Component`, 
now you only need Component in place of React.Component. 

## Webpack React Challenge

Once you've worked through the Webpack tutorial try these challenges: 

- Try installing the Webpack Hot Loader: http://gaearon.github.io/react-hot-loader/getstarted/
- Use the Webpack project to rebuild one of the earlier projects. Make a .js file for each component. 

## Webpack React Boilerplate/Starter

The whole process of setting up Webpack is a little involved. Understand that you shouldn't have to 
do it for every new project, unless you want to! You can create the WEbpack example above and save it 
as a starter project for future projects, or use one of the many Webpack boilerplate/starter open
source projects on the web. 



## Resources

- http://webpack.github.io/docs/what-is-webpack.html
- https://blog.risingstack.com/using-react-with-webpack-tutorial/
- https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr