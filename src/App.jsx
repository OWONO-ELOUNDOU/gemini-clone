//import liraries
import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/Main/Main';

// create a component
const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

//make this component available to the app
export default App;
