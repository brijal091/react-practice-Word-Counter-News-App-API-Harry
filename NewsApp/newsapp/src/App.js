import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element = {<News pageSize = {5} category = 'general'/>} />
            <Route exact path="/business" element = {<News pageSize = {5} category = 'business'/>} />
            <Route exact path="/entertainment" element = {<News pageSize = {5} category = 'entertainment'/>} />
            <Route exact path="/health" element = {<News pageSize = {5} category = 'health'/>} />
            <Route exact path="/science" element = {<News pageSize = {5} category = 'science'/>} />
            <Route exact path="/sports" element = {<News pageSize = {5} category = 'sports'/>} />
            <Route exact path="/technology" element = {<News pageSize = {5} category = 'technology'/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

