import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

function Features() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Kittens are Raving About Kitten Chat</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Zap className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Lightning-Fast Paw-to-Paw Messaging</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Send meowsages instantly! Our optimized servers ensure your chats reach your feline friends faster than a chasing laser pointer.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Shield className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Purrfectly Secure & Private</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Your privacy is our top priority. Kitten Chat uses state-of-the-art encryption to keep your conversations safe and sound, away from prying dog eyes.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <TrendingUp className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Trending Cat Content, Tailored for You</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Discover the latest catnip crazes, trending tuna recipes, and paw-some events happening in your neighborhood. Kitten Chat keeps you in the loop!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
