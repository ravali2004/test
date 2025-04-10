import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const categories = [
  'Electronics',
  'Books & Notes',
  'ID Cards',
  'Keys',
  'Bags',
  'Clothing',
  'Others'
];

const locations = [
  'Main Gate',
  'Library Entrance',
  'Library',
  'A Block',
  'N Block',
  'H Block',
  'MHP',
  'Cafeteria',
  'Xerox Centre',
  'Zest Mart',
  'Hostel',
  'Pharmacy Block',
  'U Block',
  'Convocation Hall',
  'Other'
];

const mockItems = [
  {
    id: 1,
    title: 'Black Laptop Bag',
    category: 'Bags',
    location: 'Library',
    date: '2024-03-10',
    description: 'Found near the study area on the second floor',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    title: 'Student ID Card',
    category: 'ID Cards',
    location: 'Student Center',
    date: '2024-03-11',
    description: 'Found in the main hallway',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    title: 'Let us C',
    category: 'Books',
    location: 'N Block',
    date: '2024-03-11',
    description: 'Found in the main hallway',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300'
  },
  // Add more mock items as needed
];

function Lost() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesLocation = !selectedLocation || item.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Lost Items</h1>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search lost items..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              className="border rounded-lg px-4 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="border rounded-lg px-4 py-2"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{item.location}</span>
                <span>{new Date(item.date).toLocaleDateString()}</span>
              </div>
              <div className="mt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Contact Finder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lost;