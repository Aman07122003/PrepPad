import React from 'react';
import { BookOpen, Server, Database, Network, DraftingCompass, Monitor, ChevronDown, Search } from "lucide-react";


const notes = [
  { 
    title: "System Design", 
    link: "/notes/system-design", 
    icon: Server,
    category: "Development",
    description: "Scalable architecture patterns and design principles",
    difficulty: "Intermediate"
  },
  { 
    title: "DSA", 
    link: "/notes/dsa", 
    icon: Database,
    category: "Programming",
    description: "Data structures and algorithms with implementations",
    difficulty: "Advanced"
  },
  { 
    title: "Computer Networks", 
    link: "/notes/computer-networks", 
    icon: Network,
    category: "Infrastructure",
    description: "Network protocols, topologies and communication",
    difficulty: "Intermediate"
  },
  { 
    title: "Operating System", 
    link: "/notes/os", 
    icon: Monitor,
    category: "Systems",
    description: "Process management, memory, and file systems",
    difficulty: "Intermediate"
  },
  { 
    title: "Aptitude", 
    link: "/notes/aptitude", 
    icon: DraftingCompass,   // good choice for Aptitude/Maths
    category: "Service Based Companies",
    description: "Quantitative aptitude for placements",
    difficulty: "Beginner"
  },  
  { 
    title: "Logical Reasoning", 
    link: "/notes/logical-reasoning", 
    icon: BookOpen,
    category: "General",
    description: "Logical Reasoning for placements",
    difficulty: "Beginner"
  },
  { 
    title: "Verbal Ability", 
    link: "/notes/verbal-ability", 
    icon: BookOpen,
    category: "General",
    description: "Logical Reasoning for placements",
    difficulty: "Beginner"
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-gray-50 to-blue-50">
      
      <div className="max-w-7xl mx-auto mt-8">
        {/* Header */}
        <div className="text-center mb-10 relative flex flex-col">

        {/* Title with gradient + underline animation */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Notes
            </span>
            <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full animate-pulse"></span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive collection of <span className="font-semibold text-blue-600">computer science</span> topics, 
            system design principles, and practical development concepts — 
            all in one place.
        </p>
        </div>


        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => {
            const Icon = note.icon;
            const difficultyColors = {
              "Beginner": "bg-green-100 text-green-800",
              "Intermediate": "bg-yellow-100 text-yellow-800",
              "Advanced": "bg-red-100 text-red-800"
            };

            return (
              <a 
                key={index} 
                href={note.link}
                className="group block transition-transform duration-300 hover:scale-105"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[note.difficulty]}`}>
                        {note.difficulty}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {note.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {note.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {note.category}
                      </span>
                      <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
                        <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Empty State */}
        {notes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
            <p className="text-gray-600">Try adding some notes to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
