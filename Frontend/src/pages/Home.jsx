import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-8 flex items-center gap-12 min-h-[80vh]">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Interactive learning platform with detailed notes, visualizations, and practice problems to help you master DSA concepts.
          </p>
          <div className="flex gap-4">
            <Link to="/menu" className="bg-blue-600 text-white py-3 px-6 rounded font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors hover:-translate-y-0.5">
              Explore Notes <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/notes/new" className="bg-transparent text-blue-600 border border-blue-600 py-3 px-6 rounded font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors hover:-translate-y-0.5">
              Create Note <i className="fas fa-plus"></i>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect x='100' y='50' width='400' height='300' fill='%234361ee' rx='20'/%3E%3Ccircle cx='300' cy='150' r='50' fill='%23f72585'/%3E%3Cpath d='M200 250 L400 250 L300 320 Z' fill='%234cc9f0'/%3E%3Cline x1='100' y1='50' x2='500' y2='350' stroke='%23ffffff' stroke-width='5'/%3E%3C/svg%3E" 
            alt="DSA Visualization" 
            className="max-w-full rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose DSA Master?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              <i className="fas fa-sitemap"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Structured Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Organized by categories and subcategories for systematic learning.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Code Examples</h3>
            <p className="text-gray-600 leading-relaxed">
              Practical implementations with multiple programming languages.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visualizations</h3>
            <p className="text-gray-600 leading-relaxed">
              Interactive diagrams to understand complex algorithms.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
              <i className="fas fa-tasks"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Problems</h3>
            <p className="text-gray-600 leading-relaxed">
              Curated problems to test your understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Link to="/notes/arrays" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-inherit no-underline transition-transform hover:-translate-y-1 hover:border-blue-600">
            <h3 className="text-blue-600 font-bold mb-2">Arrays</h3>
            <p className="text-gray-600 text-sm mb-6">Learn about array operations and algorithms</p>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <span className="text-gray-600 text-xs">12 topics</span>
          </Link>
          <Link to="/notes/linked-lists" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-inherit no-underline transition-transform hover:-translate-y-1 hover:border-blue-600">
            <h3 className="text-blue-600 font-bold mb-2">Linked Lists</h3>
            <p className="text-gray-600 text-sm mb-6">Master singly, doubly and circular linked lists</p>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: "40%" }}></div>
            </div>
            <span className="text-gray-600 text-xs">8 topics</span>
          </Link>
          <Link to="/notes/trees" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-inherit no-underline transition-transform hover:-translate-y-1 hover:border-blue-600">
            <h3 className="text-blue-600 font-bold mb-2">Trees</h3>
            <p className="text-gray-600 text-sm mb-6">Binary trees, BST, AVL and more</p>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: "25%" }}></div>
            </div>
            <span className="text-gray-600 text-xs">15 topics</span>
          </Link>
          <Link to="/notes/sorting" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-inherit no-underline transition-transform hover:-translate-y-1 hover:border-blue-600">
            <h3 className="text-blue-600 font-bold mb-2">Sorting Algorithms</h3>
            <p className="text-gray-600 text-sm mb-6">Bubble sort, quicksort, mergesort and others</p>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: "90%" }}></div>
            </div>
            <span className="text-gray-600 text-xs">10 topics</span>
          </Link>
        </div>
        <div className="text-center">
          <Link to="/notes" className="text-blue-600 font-medium no-underline flex items-center gap-2 justify-center border border-blue-600 py-3 px-6 rounded-md hover:bg-blue-600 hover:text-white transition-colors inline-flex">
            View All Categories <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-4 mt-auto">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">DSA Master</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Master Data Structures and Algorithms through interactive learning and practice.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 text-xl hover:text-white transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 text-xl hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 text-xl hover:text-white transition-colors"><i className="fab fa-github"></i></a>
              <a href="#" className="text-gray-400 text-xl hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/notes" className="text-gray-400 no-underline hover:text-white transition-colors">DSA Notes</Link></li>
              <li><Link to="/notes/new" className="text-gray-400 no-underline hover:text-white transition-colors">Create Notes</Link></li>
              <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Practice Problems</a></li>
              <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Cheat Sheets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 no-underline hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new content and features.
            </p>
            <div className="flex gap-2 mt-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 py-2 px-3 rounded text-gray-900"
              />
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <p>&copy; 2023 DSA Master. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;