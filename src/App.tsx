import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import Explore from './routes/Explore'
import VideoDetail from './routes/VideoDetail'
import Live from './routes/Live'
import Products from './routes/Products'
import Profile from './routes/Profile'
import AgeGate from './routes/AgeGate'
import Privacy from './routes/Privacy'
import Terms from './routes/Terms'
import Report from './routes/Report'
import BottomNav from './components/BottomNav'

export default function App(){
  return (
    <div className="app-container">
      <header className="px-4 pt-6 pb-2">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src="/assets/logo.svg" alt="BLACKVEIL" width={160} />
        </Link>
      </header>

      <main className="flex-1 px-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/live" element={<Live/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/age" element={<AgeGate/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}
