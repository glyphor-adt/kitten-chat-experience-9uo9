import React from 'react'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">Unleash Your Inner Kitten Communicator</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">Connect with feline friends like never before. Kitten Chat brings purrfect conversations to your paws, whether you're a playful tabby or a sophisticated Siamese.</p>
          <div className="mt-12">
            <a href="/signup" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 inline-block animate-slide-up">Join the Kitten Chat Revolution</a>
            <a href="/features" className="border-2 border-gray-300 hover:border-blue-500 text-white px-6 py-3 rounded-xl ml-4 transition-all duration-300 inline-block animate-slide-up" aria-label="View features">Explore Features</a>
          </div>
          <img src="https://images.unsplash.com/photo-1573865526739-1072a46953ca?w=800&h=600" alt="Cute kitten using Kitten Chat" className="mt-16 rounded-2xl shadow-2xl mx-auto animate-fade-in" aria-label="Kitten using chat app"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
