import './App.css'
import React from 'react';
import Header from './components/header';
import Content from './components/content/content';
import News from './components/news';
import Coming from './components/coming';
import Footer from './components/footer';

function App() {
  
  
  return (
    <>
      <div id="shell">
        <Header/>
        <div id="main">
          <Content/>
          <News/>
          <Coming/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
