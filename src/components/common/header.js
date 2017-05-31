"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className='container-fluid'>
                    <a  href="/" className="navbar-brand">
                        <img  style={{maxHeight: "100%"}} src="images/levi9_icon-72.png"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li >
                            <a style={{color : "red"}} href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
});
module.exports = Header;