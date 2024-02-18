import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import SignIn from './Pages/SignIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import About from './Pages/About.jsx'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>}/>     
          <Route path='/about' element={ <About/>}/>  
          <Route path='/dashBoard' element={<Dashboard/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={ <SignUp/>}/>
              
             
        </Routes>

    </BrowserRouter>
  )
}