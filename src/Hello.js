import React, { Component } from 'react';
import './Hello.css';

const Hello = (props) =>  {
        return ( 
        <div className='f1 tc'>
            <h2>Hello World</h2>
            <p>Welcome Jinal Sir</p>
            <p>{props.greetings}</p>
        </div>);
}
export default Hello;