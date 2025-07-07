import React, { useState } from 'react';
import { Shield, Eye, Bell, Database, Users, CreditCard, Mail, Phone, Menu, X, CheckCircle, Camera, Lock, Zap, Check, Star, User, ArrowRight, Home, Building, Car, Store, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isSignUp: false
  });
  
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      if (loginData.isSignUp && loginData.password !== loginData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      setIsLoggedIn(true);
      setUserEmail(loginData.email);
      setShowLogin(false);
      setShowSubscriptionModal(true);
    }
  };

  const handleSubscriptionSelect = (plan: string) => {
    setSelectedPlan(plan);
    setShowSubscriptionModal(false);
    scrollToSection('payment');
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.cardNumber) {
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        setShowEmailConfirmation(true);
      }, 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
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

  const teamMembers = [
    {
      name: 'Mudit Tarway',
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Krish Jaiswal',
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Soumyadeep Das',
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Ranit Panda',
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Tamalika Chakraborty',
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  ];

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
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'product', 'applications', 'pricing', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'product' ? 'Product Details' : 
                   section === 'applications' ? 'Applications' : section}
                </button>
              ))}
              
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-lg font-semibold transition-all flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="text-green-400 text-sm">Welcome!</span>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setUserEmail('');
                      setShowSubscriptionModal(false);
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
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
              {['home', 'product', 'applications', 'pricing', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize transition-colors hover:text-blue-400"
                >
                  {section === 'product' ? 'Product Details' : 
                   section === 'applications' ? 'Applications' : section}
                </button>
              ))}
              {!isLoggedIn && (
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-blue-400 font-semibold"
                >
                  Login
                </button>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {loginData.isSignUp ? 'Sign Up' : 'Login'}
              </h2>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {loginData.isSignUp && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={loginData.confirmPassword}
                    onChange={handleLoginInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                {loginData.isSignUp ? 'Sign Up' : 'Login'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setLoginData({ ...loginData, isSignUp: !loginData.isSignUp })}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {loginData.isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Selection Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full border border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-gray-300">Select the perfect plan for your home security needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Monthly Plan */}
              <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-blue-500 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Monthly Plan</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-400">₹799</span>
                    <span className="text-gray-400 ml-2">per month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pricingPlans.monthly.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscriptionSelect('monthly')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Choose Monthly
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>

              {/* Yearly Plan */}
              <div className="bg-gray-700/50 p-6 rounded-xl border border-blue-500 ring-2 ring-blue-500/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Yearly Plan</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-blue-400">₹8,999</span>
                    <span className="text-gray-400 ml-2">per year</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    Save ₹589
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pricingPlans.yearly.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscriptionSelect('yearly')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Choose Yearly
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowSubscriptionModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                I'll decide later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Confirmation Modal */}
      {showEmailConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700 text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <Mail className="h-10 w-10 text-green-400" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Payment Successful!</h3>
            <p className="text-gray-300 mb-4">
              Thank you for subscribing to Secure Vision!
            </p>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <p className="text-blue-300 font-semibold text-sm mb-2">
                AI-Powered Face Detection Software Link
              </p>
              <p className="text-gray-300 text-sm">
                The download link and setup instructions will be sent to:
              </p>
              <p className="text-blue-400 font-semibold mt-2">{userEmail}</p>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Please check your email within the next 5-10 minutes. Don't forget to check your spam folder.
            </p>
            
            <button
              onClick={() => setShowEmailConfirmation(false)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

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
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Get Started
                </button>
              ) : (
                <button
                  onClick={() => setShowSubscriptionModal(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Choose Your Plan
                </button>
              )}
              <button
                onClick={() => scrollToSection('product')}
                className="border border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Explore Features
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
                  familiar faces while detecting unknown visitors with high accuracy.
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

      {/* Applications Section */}
      <section id="applications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Where You Can Use Secure Vision
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Versatile AI security solution perfect for various environments and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Residential Homes */}
              <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Residential Homes</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Protect your family and property with intelligent monitoring that recognizes familiar faces and alerts you to unknown visitors.
                </p>
              </div>

              {/* Office Buildings */}
              <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Office Buildings</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enhance workplace security by monitoring entry points and maintaining a record of all visitors and employees.
                </p>
              </div>

              {/* Parking Areas */}
              <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Parking Areas</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Secure parking lots and garages with automated surveillance that identifies authorized personnel and detects intruders.
                </p>
              </div>

              {/* Retail Stores */}
              <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Retail Stores</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Monitor customer traffic, identify VIP customers, and enhance loss prevention with intelligent facial recognition.
                </p>
              </div>
            </div>

            {/* Additional Use Cases */}
            <div className="mt-16 bg-gray-800/40 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Additional Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Educational Institutions</h4>
                  <p className="text-gray-300 text-sm">Schools and universities for campus security and access control</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-purple-400">Healthcare Facilities</h4>
                  <p className="text-gray-300 text-sm">Hospitals and clinics for patient and staff safety monitoring</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Warehouses</h4>
                  <p className="text-gray-300 text-sm">Industrial facilities for inventory protection and access management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Select the perfect plan for your home security needs
              </p>
              {!isLoggedIn && (
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mt-6 max-w-md mx-auto">
                  <p className="text-yellow-300 text-sm">
                    Please login first to select and purchase a plan
                  </p>
                </div>
              )}
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
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowLogin(true);
                    } else {
                      setSelectedPlan('monthly');
                      scrollToSection('payment');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {!isLoggedIn ? 'Login to Choose' : 'Choose Monthly'}
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
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowLogin(true);
                    } else {
                      setSelectedPlan('yearly');
                      scrollToSection('payment');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {!isLoggedIn ? 'Login to Choose' : 'Choose Yearly'}
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
      {isLoggedIn && (
        <section id="payment" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Complete Your Purchase
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Pay securely to activate your access to Secure Vision software
                </p>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-8">
                  <p className="text-blue-300 font-semibold">
                    Selected Plan: {selectedPlan === 'monthly' ? 'Monthly (₹799/month)' : 'Yearly (₹8,999/year)'}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Logged in as: {userEmail}
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
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">Payment Processing...</h3>
                  <p className="text-gray-300 mb-4">
                    Please wait while we process your payment and prepare your software access.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block border border-blue-500/30">
                Academic Project
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Computer science students passionate about AI and security technology
              </p>
              
              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">1</div>
                  <div className="text-gray-400 text-sm">Academic Project</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">AI</div>
                  <div className="text-gray-400 text-sm">Powered Solution</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 mb-16 text-center">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                As computer science students, we're dedicated to learning and innovation in the field of AI-powered security. 
                Our goal is to make sophisticated security technology accessible and user-friendly, while gaining hands-on 
                experience in machine learning, software development, and product design.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white">{member.name}</h3>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="bg-gray-700 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.github}
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="bg-gray-700 hover:bg-blue-500 p-2 rounded-lg transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
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