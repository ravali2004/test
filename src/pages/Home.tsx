import React from 'react';
import { Search, MapPin, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Lost Something on Campus?
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          UniFind helps you locate your lost items or report found ones across the university campus
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link
            to="/lost"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Find Lost Items
          </Link>
          <Link
            to="/report"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Report Found Item
          </Link>
        </div>
        
        {/* Center Image */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
            alt="University Campus"
            className="rounded-xl shadow-2xl w-full"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-10 rounded-xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Search className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
          <p className="text-gray-600">
            Quick and efficient search with filters to help you find your lost items
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MapPin className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location Tracking</h3>
          <p className="text-gray-600">
            Precise location information for lost and found items across campus
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
          <p className="text-gray-600">
            Get instant notifications when your item is found
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
          <p className="text-gray-600">
            Safe and verified handling of lost and found items
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-900 text-white rounded-lg p-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-200">Items Found</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-blue-200">Return Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24h</div>
            <div className="text-blue-200">Average Recovery Time</div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Report</h3>
            <p className="text-gray-600">Report your lost item or submit a found item</p>
          </div>
          <div>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Match</h3>
            <p className="text-gray-600">We'll match lost items with found ones</p>
          </div>
          <div>
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Retrieve</h3>
            <p className="text-gray-600">Collect your item from the designated location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;