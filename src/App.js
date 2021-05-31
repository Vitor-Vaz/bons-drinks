import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import { React, useEffect, useState } from 'react';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Location from './components/location/location';
import Drinks from './components/drinks/drinks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




export default function App() {


  

  
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Main />
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



