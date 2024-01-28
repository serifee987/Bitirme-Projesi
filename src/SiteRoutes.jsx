import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'

function SiteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/detail/:id' element={<Detail />} /> {/* Detay sayfası için route eklendi */}

</Routes>
  )
}

export default SiteRoutes