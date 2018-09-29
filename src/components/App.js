import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
// import logo from '../logo.png';
import Navbar from './Navbar';
import Content from './Content';

ReallySmoothScroll.shim();

export default class App extends Component {

  constructor() {
    super();
  }
  // <div className='container'>
  //     <img className='logo' src={logo} />
  //     <h1 className='title'>React Starter</h1>
  // </div>
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Content></Content>
      </div>
    );
  }
}