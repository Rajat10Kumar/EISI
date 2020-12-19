import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Form from './components/Form'
import Features from './components/Features';
import ScrollToTop from './components/ScrolltoTop';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
         <Navbar />
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/About' exact component={About} />
           <Route path='/Services' exact component={Services} />
           <Route path='/Signup' exact component={Form}/>
           <Route path='/Features' exact component={Features}/>
         </Switch>
      </Router>
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default App;
