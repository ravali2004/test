import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

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

function Report() {
  const [itemType, setItemType] = useState('lost');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [otherLocation, setOtherLocation] = useState('');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleAIComplete = (data: any) => {
    console.log('AI Assistant completed with data:', data);
    setShowAIAssistant(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Report an Item</h1>
        <button
          onClick={() => setShowAIAssistant(!showAIAssistant)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showAIAssistant ? 'Switch to Form' : 'Use AI Assistant'}
        </button>
      </div>
      
      {showAIAssistant ? (
        <AIAssistant onComplete={handleAIComplete} />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 py-2 text-center ${
                  itemType === 'lost'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setItemType('lost')}
              >
                Report Lost Item
              </button>
              <button
                className={`flex-1 py-2 text-center ${
                  itemType === 'found'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setItemType('found')}
              >
                Report Found Item
              </button>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="e.g., Black Wallet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="documents">Documents</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                className="w-full border rounded-lg px-4 py-2 mb-2"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select a location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              {selectedLocation === 'Other' && (
                <input
                  type="text"
                  value={otherLocation}
                  onChange={(e) => setOtherLocation(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Please specify the location"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full border rounded-lg px-4 py-2"
                rows={4}
                placeholder="Provide additional details about the item..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Drag and drop images here, or click to select files
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {files && (
                  <div className="mt-4 text-left">
                    <p className="text-sm font-medium text-gray-700">Selected files:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {Array.from(files).map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Report;