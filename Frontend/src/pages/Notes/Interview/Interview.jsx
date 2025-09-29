import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Bookmark, CheckCircle, Menu, X } from 'lucide-react';
import interviewSections from './interviewData.js';

const Interview = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const currentSection = interviewSections.find(
    (section) => section.id === activeSection
  );

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4">
      <div className="flex w-full flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Senior Engineer Interview Guide
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive preparation for technical leadership roles
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap gap-2 mb-8 justify-center">
          {interviewSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-3 rounded-lg border transition-all ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:shadow-sm'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="relative mb-8 md:hidden w-full flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="font-medium">
              {menuOpen ? 'Close Menu' : 'Open Menu'}
            </span>
          </button>

          {menuOpen && (
            <div className="absolute z-20 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
              {interviewSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Current Section */}
        <div className="bg-white md:w-[70%] w-[99%] rounded-xl shadow-lg p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentSection.title}
            </h2>
            <p className="text-gray-600 italic">{currentSection.scenario}</p>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {currentSection.questions.map((item, index) => {
              const questionId = `${currentSection.id}-${index}`;
              const isExpanded = expandedQuestions[questionId];

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* Question Header */}
                  <div
                    className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => toggleQuestion(questionId)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} />
                        <h3 className="font-semibold text-gray-900">{item.q}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bookmark size={16} />
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="p-4 border-t border-gray-200">
                      {/* Answer */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Sample Answer:
                        </h4>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-gray-700 leading-relaxed">{item.a}</p>
                        </div>
                      </div>

                      {/* Tips */}
                      {item.tips && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Preparation Tips:
                          </h4>
                          <ul className="space-y-1">
                            {item.tips.map((tip, tipIndex) => (
                              <li
                                key={tipIndex}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <span className="text-blue-500 mt-1">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
