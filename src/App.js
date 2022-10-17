import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Careers from './components/careers'
import Departments from './components/departments'
import Contact from './components/contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component = {Home}/>
      <Route path="/services" exact component = {Services}/>
      <Route path="/departments" exact component = {Departments}/>
      <Route path="/about" exact component = {About}/>
      <Route path="/careers" exact component = {Careers}/>
      <Route path="/contact" exact component = {Contact}/>
    </Router>
  );
}

export default App;
