import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Contenido from './components/Contenido'
import Sidebar from './components/Sidebar'
import Widget1 from './components/Widget1'
import Widget2 from './components/Widget2'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Contenido></Contenido>
      <Sidebar></Sidebar>
      <Widget1></Widget1>
      <Widget2></Widget2>
      <Footer></Footer>
    </div>
  );
}

export default App;
