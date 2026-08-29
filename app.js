/**
 * 
 * 
 * <div>
 *    <div> 
 *      <h1> Hello World! </h1>
 *   </div>
 * </div>   
 */

import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement('div', {id : "parent"},
    [
    React.createElement('div', {id : "child"},
        [
            React.createElement('h1', {id : "heading"}, 'Hello World h1 tag'),
            React.createElement('h2', {id : "subheading"}, 'Hello World h2 tag')
        ]
    ),
    React.createElement('div', {id : "child2"},
        [
            React.createElement('h1', {id : "heading"}, 'Hello World h1 tag'),
            React.createElement('h2', {id : "subheading"}, 'Hello World h2 tag')
        ]
    )]
);
const heading = React.createElement('h1', {id : "heading" , xyz : "abc"}, 'Hello World!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);