"use strict";
var React = require('react');

var About = React.createClass({
    statics:{
        willTransitionTo:function(transition,params,query,callback){
            if(!confirm('are you sure you want ro read a page that\'s this boring?')){
                transition.about();
            }else{
                callback();
            }
        },

        willTransitionFrom:function(transition,component){
            if(!confirm('are you sure you want to leave a page that\'s this exciting?')){
                transition.about();
            }
        }
    },
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This app uses the followinf technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});
module.exports = About;
