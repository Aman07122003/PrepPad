import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { 
  Code2, 
  Brain, 
  TrendingUp, 
  BookOpen, 
  ArrowRight, 
  Plus,
  Shield,
  Zap,
  Users,
  Star,
  ChevronRight
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Structured Learning",
      description: "Organized by categories and subcategories for systematic learning progression."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Code Examples",
      description: "Practical implementations with multiple programming language support."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Visualizations",
      description: "Interactive diagrams to understand complex algorithms intuitively."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress analytics."
    }
  ];

  const categories = [
    {
      name: "Arrays",
      topics: 12,
      progress: 75,
      color: "from-blue-500 to-blue-600",
      icon: "📊"
    },
    {
      name: "Linked Lists",
      topics: 8,
      progress: 40,
      color: "from-green-500 to-green-600",
      icon: "🔗"
    },
    {
      name: "Trees",
      topics: 15,
      progress: 25,
      color: "from-purple-500 to-purple-600",
      icon: "🌳"
    },
    {
      name: "Sorting",
      topics: 10,
      progress: 90,
      color: "from-orange-500 to-orange-600",
      icon: "📈"
    },
    {
      name: "Graphs",
      topics: 18,
      progress: 30,
      color: "from-red-500 to-red-600",
      icon: "🕸️"
    },
    {
      name: "Dynamic Programming",
      topics: 20,
      progress: 15,
      color: "from-indigo-500 to-indigo-600",
      icon: "⚡"
    }
  ];

  const stats = [
    { value: "500+", label: "DSA Topics" },
    { value: "1000+", label: "Code Examples" },
    { value: "50+", label: "Visualizations" },
    { value: "10k+", label: "Active Learners" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Master DSA the Smart Way
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master Data Structures & <span className="text-blue-600">Algorithms</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Interactive learning platform with detailed notes, visualizations, and practice problems 
                  to help you master DSA concepts and ace your technical interviews.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu" 
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Start Learning
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/notes/new" 
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                >
                  <Plus className="w-5 h-5" />
                  Create Note
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Join 10,000+ learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Trusted by developers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white transform rotate-3">
                    <div className="text-3xl mb-2">📚</div>
                    <h3 className="font-bold mb-1">Learn</h3>
                    <p className="text-blue-100 text-sm">Structured content</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 text-white transform -rotate-2">
                    <div className="text-3xl mb-2">💻</div>
                    <h3 className="font-bold mb-1">Practice</h3>
                    <p className="text-green-100 text-sm">Code examples</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white transform -rotate-1">
                    <div className="text-3xl mb-2">📊</div>
                    <h3 className="font-bold mb-1">Visualize</h3>
                    <p className="text-orange-100 text-sm">Interactive diagrams</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white transform rotate-2">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-bold mb-1">Master</h3>
                    <p className="text-purple-100 text-sm">Track progress</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">DSA Master</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to master data structures and algorithms efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600">Explore our comprehensive DSA topics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/notes/${category.name.toLowerCase().replace(' ', '-')}`}
                className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:transform hover:-translate-y-1 no-underline"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress</span>
                    <span>{category.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-500 group-hover:scale-105`}
                      style={{ width: `${category.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {category.topics} topics • {category.progress}% complete
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/notes" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 border border-blue-200 shadow-sm hover:shadow-md"
            >
              View All Categories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Master DSA?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have improved their coding skills and landed their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/notes" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
            >
              Start Learning Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/notes/new" 
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              <Plus className="w-5 h-5" />
              Contribute Notes
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">DSA Master</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Master Data Structures and Algorithms through interactive learning, visualizations, 
                and practice problems. Join our community of passionate developers.
              </p>
              <div className="flex gap-4">
                {['github', 'twitter', 'linkedin', 'discord'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <span className="text-lg">📱</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {['DSA Notes', 'Create Notes', 'Practice Problems', 'Cheat Sheets'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200 no-underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              &copy; 2024 DSA Master. Made with ❤️ for developers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;