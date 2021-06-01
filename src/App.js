import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import { React, useEffect, useState } from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import Location from './components/location/location';
import Drinks from './pages/drinks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route path="/about" >
            <Location />
          </Route>
          <Route path="/drinks" >
            <Drinks />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  )

}



