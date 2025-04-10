import React from 'react';
import { Link } from 'react-router-dom';
import { School, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <School className="h-8 w-8" />
              <span className="font-bold text-xl">UniFind</span>
            </div>
            <p className="text-blue-200">
              Helping students find their lost items and return found ones across campus.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/lost" className="text-blue-200 hover:text-white">Lost Items</Link></li>
              <li><Link to="/found" className="text-blue-200 hover:text-white">Found Items</Link></li>
              <li><Link to="/report" className="text-blue-200 hover:text-white">Report Item</Link></li>
              <li><Link to="/login" className="text-blue-200 hover:text-white">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact Support</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-blue-200">University Campus</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:support@unifind.edu" className="text-blue-200 hover:text-white">
                  support@unifind.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="text-blue-200 hover:text-white">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} UniFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;