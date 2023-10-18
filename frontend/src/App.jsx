import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Create from './Pages/Create'
import DeleteUser from './Pages/DeleteUser'
import Edit from './Pages/Edit'

import Home from './Pages/Home'
import View from './Pages/view'


const App = () => {
  return (
    <Routes>
      <Route path = '/' element= {<Home/>}/>
      <Route path = '/users/create' element= {<Create/>}/>
      <Route path = '/users/edit/:id' element= {<Edit/>}/>
      <Route path = '/users/delete/:id' element= {<DeleteUser/>}/>
      <Route path = '/users/view/:id' element= {<View/>}/>
    </Routes>
  )
}

export default App