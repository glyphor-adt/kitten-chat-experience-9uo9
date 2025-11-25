import React from 'react'
import { Twitter, GitHub, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul>
              <li><a href="/features" className="hover:text-blue-500 transition-colors duration-200">Features</a></li>
              <li><a href="/pricing" className="hover:text-blue-500 transition-colors duration-200">Pricing</a></li>
              <li><a href="/" className="hover:text-blue-500 transition-colors duration-200">Kitten Chat Pro</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul>
              <li><a href="/about" className="hover:text-blue-500 transition-colors duration-200">About Us</a></li>
              <li><a href="/blog" className="hover:text-blue-500 transition-colors duration-200">Blog</a></li>
              <li><a href="/careers" className="hover:text-blue-500 transition-colors duration-200">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors duration-200"><Twitter /></a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-200"><GitHub /></a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-200"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Kitten Chat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
