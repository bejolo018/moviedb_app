import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Views/Home'
import Home2 from './Views/Home2'
import About from './Views/About'
import Product from './Views/Product'
import Movie from './Views/Movie'


function App() {

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
      <Header />
      <div className="p-3">
      <Switch>
        <Route exact path="/">
          <Home2 />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
      </Switch>

      </div>

      <Footer />
      </Router>

    </div>
  );
}

export default App;
