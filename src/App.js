import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Resumebar from './components/resumebar/Resumebar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Resumebar/>
      <Projects/>
      <Skills/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
