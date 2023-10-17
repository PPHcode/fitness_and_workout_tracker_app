import React from 'react'
import { Route,Routes } from 'react-router-dom'
import create from './Pages/create'
import deleteUser from './Pages/deleteUser'
import edit from './Pages/edit'
import view from './Pages/view'
import Home from './Pages/Home'


const App = () => {
  return (
    <Routes>
      <Route path = '/' element= {Home}/>
      <Route path = '/users/create' element= {create}/>
      <Route path = '/users/edit/:id' element= {edit}/>
      <Route path = '/users/delete/:id' element= {deleteUser}/>
      <Route path = '/users/view/:id' element= {view}/>
    </Routes>
  )
}

export default App