import React from 'react'
import Home from './components/Home'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeById from './components/RecipeById';
import Category from './components/Category';
import Search from './components/Search';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element ={<Home/>}/> 
        <Route exact path='/:idMeal' element ={<RecipeById/>}/>
        <Route exact path='/category/:name' element={<Category/>}/>
        <Route exact path='/search/:name' element={<Search/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App