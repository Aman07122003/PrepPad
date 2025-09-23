import React from "react";
import { Link } from "react-router-dom";
import { Brain, User } from "lucide-react";

const MenuNavbar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center gap-2"
        >
          <Brain className="w-7 h-7" />
          DSA Master
        </Link>

        {/* Profile (only when logged in) */}
        {isLoggedIn && (
          <Link
            to="/profile"
            className="text-gray-600 hover:text-blue-600 transition"
            title="Profile"
          >
            <User className="w-7 h-7" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default MenuNavbar;
