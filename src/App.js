import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Weather from './Components/Weather'
import { Home } from './Components/Home'
export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path='/weather' element={<Weather></Weather>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </div>
    )
  }
}

export default App