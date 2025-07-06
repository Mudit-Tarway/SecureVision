import React, { useState } from 'react';
import { Shield, Eye, Bell, Database, Users, CreditCard, Mail, Phone, Menu, X, CheckCircle, Camera, Lock, Zap, Check, Star } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.cardNumber) {
      setPaymentSuccess(true);
      setTimeout(() => setPaymentSuccess(false), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pricingPlans = {
    monthly: {
      price: '₹799',
      period: 'per month',
      savings: null,
      features: [
        'AI-powered face recognition',
        'Real-time intruder alerts',
        'Secure image storage',
        'Mobile app access',
        'Email support',
        '24/7 monitoring'
      ]
    },
    yearly: {
      price: '₹8,999',
      period: 'per year',
      savings: 'Save ₹589',
      features: [
        'AI-powered face recognition',
        'Real-time intruder alerts',
        'Secure image storage',
        'Mobile app access',
        'Priority email support',
        '24/7 monitoring',
        'Advanced analytics',
        'Multiple device support'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Secure Vision
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'product', 'pricing', 'payment', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'product' ? 'Product Details' : section}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              {['home', 'product', 'pricing', 'payment', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-400"
                >
                  {section === 'product' ? 'Product Details' : section}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Secure Vision
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                AI-Powered Home Security
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Secure Vision provides intelligent integrated with AI face recognition. 
                It alerts users when an unknown face is detected in real-time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('product')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Explore Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="border border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                View Pricing
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Recognition</h3>
                <p className="text-gray-400">Advanced facial recognition technology</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
                <p className="text-gray-400">Instant notifications for unknown visitors</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <p className="text-gray-400">Encrypted image storage and backup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="product" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Product Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technology designed to keep your home safe and secure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Camera className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">AI-based Face Recognition</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  State-of-the-art facial recognition technology that learns and adapts to identify 
                  familiar faces while detecting unknown visitors with 99.7% accuracy.
                </p>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Real-time Intruder Alerts</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Instant notifications sent to your mobile device the moment an unknown face is detected, 
                  ensuring you're always informed about your home's security status.
                </p>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Image Storage of Visitors</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Secure cloud storage for all visitor images with advanced encryption, 
                  providing you with a complete history of everyone who visits your property.
                </p>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">User-Friendly Interface</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Intuitive dashboard and mobile app that makes monitoring your home security 
                  simple and accessible for users of all technical levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Select the perfect plan for your home security needs
              </p>
            </div>

            {/* Plan Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800/60 p-2 rounded-xl border border-gray-700">
                <button
                  onClick={() => setSelectedPlan('monthly')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedPlan === 'monthly'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPlan('yearly')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedPlan === 'yearly'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Monthly Plan */}
              <div className={`bg-gray-800/60 p-8 rounded-2xl border transition-all hover:transform hover:scale-105 ${
                selectedPlan === 'monthly' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700 hover:border-blue-500'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Monthly Plan</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-400">₹799</span>
                    <span className="text-gray-400 ml-2">per month</span>
                  </div>
                  <p className="text-gray-300">Perfect for getting started</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pricingPlans.monthly.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('payment')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Choose Monthly
                </button>
              </div>

              {/* Yearly Plan */}
              <div className={`bg-gray-800/60 p-8 rounded-2xl border transition-all hover:transform hover:scale-105 relative ${
                selectedPlan === 'yearly' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700 hover:border-blue-500'
              }`}>
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Yearly Plan</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-blue-400">₹8,999</span>
                    <span className="text-gray-400 ml-2">per year</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Save ₹589
                  </div>
                  <p className="text-gray-300">Best value for long-term security</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pricingPlans.yearly.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('payment')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Choose Yearly
                </button>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-12">
              <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 max-w-md mx-auto">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2">5-Day Money Back Guarantee</h4>
                <p className="text-gray-400 text-sm">
                  Not satisfied? Get a full refund within 5 days, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get Started
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Pay securely to activate your access to Secure Vision software
              </p>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-8">
                <p className="text-blue-300 font-semibold">
                  Selected Plan: {selectedPlan === 'monthly' ? 'Monthly (₹799/month)' : 'Yearly (₹8,999/year)'}
                </p>
              </div>
            </div>

            {!paymentSuccess ? (
              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
                <form onSubmit={handlePayment} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Plan:</span>
                      <span className="text-white font-semibold">
                        {selectedPlan === 'monthly' ? 'Monthly' : 'Yearly'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-300">Total:</span>
                      <span className="text-blue-400">
                        {selectedPlan === 'monthly' ? '₹799' : '₹8,999'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Pay Now
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-8 rounded-2xl border border-green-500/30 text-center">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-green-400">Payment Successful!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for your purchase. Your Secure Vision access has been activated.
                </p>
                <p className="text-sm text-gray-400">
                  You will receive a confirmation email shortly with your account details.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300">
                Have questions? We're here to help you secure your home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">2023securevision@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">+91-1234567890</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Secure Vision
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Secure Vision. Academic ESD Project.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;