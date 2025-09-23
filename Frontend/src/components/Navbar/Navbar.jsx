import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 flex items-center gap-2"
          >
            <Brain className="w-7 h-7" />
            DSA Master
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 font-medium hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/notes"
              className="text-gray-600 font-medium hover:text-blue-600 transition"
            >
              Notes
            </Link>
            <Link
              to="/notes/new"
              className="text-gray-600 font-medium hover:text-blue-600 transition"
            >
              Create Note
            </Link>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium shadow hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link
              to="/"
              className="text-gray-600 font-medium hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/notes"
              className="text-gray-600 font-medium hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Notes
            </Link>
            <Link
              to="/notes/new"
              className="text-gray-600 font-medium hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Create Note
            </Link>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium shadow hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
