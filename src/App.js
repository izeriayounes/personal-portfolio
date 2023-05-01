import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Resume from './components/resume/Resume.jsx';
import Contact from './components/contact/Contact.jsx';
import Skills from './components/skills/Skills.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
