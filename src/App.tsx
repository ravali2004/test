import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { School, Search, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Lost from './pages/Lost';
import Found from './pages/Found';
import Report from './pages/Report';
import Login from './pages/Login';
import Footer from './components/Footer';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <School className="h-8 w-8" />
              <span className="font-bold text-xl">UniFind</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="/lost" className="hover:bg-blue-800 px-3 py-2 rounded-md">Lost Items</Link>
              <Link to="/found" className="hover:bg-blue-800 px-3 py-2 rounded-md">Found Items</Link>
              <Link to="/report" className="hover:bg-blue-800 px-3 py-2 rounded-md">Report Item</Link>
              <Link to="/login" className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">Login</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="/lost" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Lost Items</Link>
              <Link to="/found" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Found Items</Link>
              <Link to="/report" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Report Item</Link>
              <Link to="/login" className="block bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/found" element={<Found />} />
            <Route path="/report" element={<Report />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;