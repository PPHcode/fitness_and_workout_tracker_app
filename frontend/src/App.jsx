import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Create from './Pages/Create'
import DeleteUser from './Pages/DeleteUser'
import Edit from './Pages/Edit'

import Home from './Pages/Home'
import View from './Pages/view'
import HomeMain from './Pages/HomeMain'
import NavBar from './Pages/navBar'
import News from './Pages/News'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <Routes>
      <Route path = '/' element= {<HomeMain/>}/>
      <Route path = '/home' element= {<Home/>}/>
      <Route path = '/users/create' element= {<Create/>}/>
      <Route path = '/users/edit/:id' element= {<Edit/>}/>
      <Route path = '/users/delete/:id' element= {<DeleteUser/>}/>
      <Route path = '/users/view/:id' element= {<View/>}/>
      <Route path = '/nav' element= {<NavBar/>}/>
      <Route path = '/news' element= {<News/>}/>
      <Route path = '/contact' element= {<Contact/>}/>
    </Routes>
  )
}

export default App