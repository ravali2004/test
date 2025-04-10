import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

function Found() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Found Items</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recently Found Items</h2>
        <div className="grid gap-6">
          {/* This is a placeholder for found items - will be replaced with real data */}
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Blue Backpack</h3>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Library - Second Floor</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Found on March 12, 2024</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Claim Item
              </button>
            </div>
          </div>
          
          {/* Add more found items here */}
        </div>
      </div>
    </div>
  );
}

export default Found;