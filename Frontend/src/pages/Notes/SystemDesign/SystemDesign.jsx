import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import categories from './Data/categories.js';
import contentData from './Data/contentData.js';

const SystemDesign = () => {
  const [activeCategory, setActiveCategory] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: categories.overview.icon },
    { id: 'fundamentals', label: 'Core Foundations', icon: categories.fundamentals.icon },
    { id: 'scalability', label: 'Scalability', icon: categories.scalability.icon },
    { id: 'databases', label: 'Data Systems', icon: categories.databases.icon },
    { id: 'caching', label: 'Caching & Messaging', icon: categories.caching.icon },
    { id: 'security', label: 'Security', icon: categories.security.icon },
    { id: 'patterns', label: 'Architecture Patterns', icon: categories.patterns.icon },
    { id: 'caseStudies', label: 'Case Studies', icon: categories.caseStudies.icon }
  ];

  const toggleSection = (sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const CurrentIcon = categories[activeCategory]?.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            System Design Mastery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide from SDE-3 readiness to PhD-level distributed systems depth
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  activeCategory === item.id
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                }`}
              >
                <IconComponent size={18} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-2 bg-white rounded-lg shadow-sm border">
              {CurrentIcon && <CurrentIcon size={20} />}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {categories[activeCategory]?.title}
            </h2>
          </div>
          <p className="text-gray-600">
            {categories[activeCategory]?.description}
          </p>
        </div>

        {/* Content Tables */}
        <div className="space-y-8 max-w-7xl mx-auto">
          {(contentData[activeCategory] || []).map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h3>
                {expandedSections[section.title] ? 
                  <ChevronUp size={20} className="text-gray-400" /> : 
                  <ChevronDown size={20} className="text-gray-400" />
                }
              </button>
              
              {expandedSections[section.title] && (
                <div className="p-6 pt-0 border-t">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Part</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Part</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Topic</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.topics.map((topic, topicIndex) => (
                          <tr
                            key={topicIndex}
                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          >
                            <td className="py-4 px-4">
                              <label className="inline-flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  className="form-checkbox h-5 w-5 text-blue-600" 
                                  checked={topic.completed} 
                                  onChange={() => handleToggle(topic.partNumber)} 
                                />
                                <span className="font-medium text-gray-900">{topic.partNumber}</span>
                              </label>
                            </td>
                            <td className="py-4 px-4">
                              <span className="font-medium text-gray-900">{topic.part}</span>
                            </td>
                            <td className="py-4 px-4">
                              <a 
                                href={topic.link}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                <span className="font-medium">{topic.name}</span>
                                <ExternalLink size={14} />
                              </a>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-gray-700">{topic.description}</span>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-gray-700">{topic.duration}</span>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                topic.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                topic.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                topic.level === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {topic.level}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Key Learning Principles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Always start with requirements gathering and analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Design for scalability and performance from the beginning</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Security should be integrated, not added as an afterthought</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Monitor everything that matters for observability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;