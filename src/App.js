import React, { useEffect, useState } from 'react';
import Finder from './components/Finder';
import Home from './components/Home';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecipeItem from './components/RecipeItem';

function App() {

  return (
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/finder' component={Finder} />
          <Route exact path='/about' component={About} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/contact' component={Contact} />
          <Route path="/finder/:id" component={RecipeItem} />
          <Redirect to='/' />
          
        </Switch>

        <Footer />
      </div>
  );
}

export default App;
