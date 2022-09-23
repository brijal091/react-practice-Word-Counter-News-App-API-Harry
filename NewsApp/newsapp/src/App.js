import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Make Sure Your all the component should be inside your Router else nothing will be displaied. For Example i have forgottern to add NavBar Component inside the Router so it was giving an error, */}
        <Router>
        <Navbar />
          <Routes>
            {/* Adding key because we are Forcing "News" Component to be Remounted else only url will be changes not the news and othe data, that's why using key we are focing component for remounting */}
            {/* Must Make sure that key should be inside of Component not in Route  */}
            <Route exact path="/" element = {<News key="1" pageSize = {9} category='general'/>} />
            <Route exact path="/business" element = {<News  key="2" pageSize = {9} category='business'/>} />
            <Route exact path="/entertainment" element = {<News key="3" pageSize = {9} category='entertainment'/>} />
            <Route exact path="/health" element = {<News key="4" pageSize = {9} category='health'/>} />
            <Route exact path="/science" element = {<News key="9" pageSize = {9} category='science'/>} />
            <Route exact path="/sports" element = {<News key="6" pageSize = {9} category='sports'/>} />
            <Route exact path="/technology" element = {<News key="7" pageSize = {9} category='technology'/>} />         
          </Routes>
        </Router>
      </div>
    )
  }
}

