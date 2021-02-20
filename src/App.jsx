import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import { Container} from 'react-bootstrap';
// Mounting Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path="/product/:id"  component={ProductScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App