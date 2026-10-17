import React from 'react'

export default function BottomNav(){
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blackveil/90 border-t border-gray-800 py-2 px-4 sm:hidden">
      <div className="max-w-3xl mx-auto flex justify-between">
        <a href="/" className="text-center text-xs">Home</a>
        <a href="/explore" className="text-center text-xs">Explore</a>
        <a href="/live" className="text-center text-xs">Live</a>
        <a href="/products" className="text-center text-xs">Products</a>
        <a href="/profile" className="text-center text-xs">Profile</a>
      </div>
    </nav>
  )
}
