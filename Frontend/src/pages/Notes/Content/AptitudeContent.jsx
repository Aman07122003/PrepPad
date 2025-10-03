import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp, BookOpen, Calculator, Lightbulb, Video, Loader2 } from "lucide-react";
import { getTopicContent } from "../../../api/menu.api";

const AptitudeContent = () => {
  const { section, chapter, topic } = useParams();
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default for better UX
  const [topicData, setTopicData] = useState(null);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Auto-expand all items on mobile for better UX
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!section || !chapter || !topic) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getTopicContent(section, chapter, topic);
        console.log("Fetched Topic Content:", result);

        if (result) {
          setTopicData(result);

          // Handle YouTube video embed
          if (result.video) {
            let videoId = "";
            const link = result.video;

            if (link.includes("youtu.be")) {
              const url = new URL(link);
              videoId = url.pathname.slice(1);
            } else if (link.includes("youtube.com")) {
              const url = new URL(link);
              videoId = url.searchParams.get("v");
            }

            if (videoId) {
              setVideo(`https://www.youtube.com/embed/${videoId}`);
            } else {
              console.warn("Invalid YouTube URL");
              setVideo(null);
            }
          }
        } else {
          setError("No content available for this topic");
        }
      } catch (err) {
        console.error("Error fetching topic:", err);
        setError("Failed to load content. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [section, chapter, topic]);

  // Loading state with better UX
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Content</h2>
          <p className="text-gray-500">Preparing your learning materials...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Content Unavailable</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!topicData || !topicData.data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Learning Content</h2>
            <p className="text-gray-600">Detailed content for this topic is coming soon!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with breadcrumb and progress */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-blue-600 cursor-pointer">{section}</span>
            <span>›</span>
            <span className="hover:text-blue-600 cursor-pointer">{chapter}</span>
            <span>›</span>
            <span className="text-blue-600 font-medium">{topic}</span>
          </nav>
          
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              {topicData.Title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Step-by-step learning with theory, practical examples, and key formulas
            </p>
          </div>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto bg-white rounded-full p-1 shadow-sm">
            <div className="flex justify-between text-xs text-gray-500 px-2">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>
        </div>

        {/* Optional YouTube Video */}
        {video && (
          <div className="mb-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <Video className="w-6 h-6 text-red-600 mr-2" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Video Lesson</h2>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 sm:h-64 lg:h-80 rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>
        )}

        {/* Learning Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 p-4 sm:p-6">
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Learning Modules</h2>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              {topicData.data.length} modules to master this topic
            </p>
          </div>

          {/* Accordion Content */}
          <div className="divide-y divide-gray-100">
            {topicData.data.map((item, i) => (
              <div
                key={i}
                className="transition-all duration-300 hover:bg-gray-50"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        {item.heading}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === i ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {(isMobile || openIndex === i) && (
                  <div className="px-4 sm:px-6 pb-6 ml-12 sm:ml-16 animate-fadeIn">
                    <div className="space-y-6 border-l-2 border-blue-200 pl-6">
                      {/* Theory Section */}
                      {item.theory && (
                        <section className="bg-blue-50 rounded-xl p-4">
                          <div className="flex items-center mb-3">
                            <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                            <h4 className="font-semibold text-gray-800">Key Concepts</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{item.theory}</p>
                        </section>
                      )}

                      {/* Formulas Section */}
                      {item.formulas?.length > 0 && (
                        <section className="bg-green-50 rounded-xl p-4">
                          <div className="flex items-center mb-3">
                            <Calculator className="w-5 h-5 text-green-600 mr-2" />
                            <h4 className="font-semibold text-gray-800">Important Formulas</h4>
                          </div>
                          <div className="space-y-2">
                            {item.formulas.map((formula, idx) => (
                              <div
                                key={idx}
                                className="bg-white rounded-lg p-3 shadow-sm border border-green-100"
                              >
                                <code className="text-green-700 font-mono text-sm">
                                  {formula}
                                </code>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {/* Examples Section */}
                      {item.examples?.length > 0 && (
                        <section>
                          <h4 className="font-semibold text-gray-800 mb-4">Practice Examples</h4>
                          <div className="space-y-4">
                            {item.examples.map((ex, idx) => (
                              <div
                                key={idx}
                                className="bg-gray-50 rounded-xl p-4 border border-gray-200 transition-all hover:shadow-md"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mt-1">
                                    Q
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-gray-800 font-medium mb-3">
                                      {ex.q}
                                    </p>
                                    <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                                      <p className="text-green-700 font-medium">
                                        <span className="font-semibold">Solution: </span>
                                        {ex.a}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Mark as Completed
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Practice More Exercises
          </button>
        </div>
      </div>
    </div>
  );
};

export default AptitudeContent;