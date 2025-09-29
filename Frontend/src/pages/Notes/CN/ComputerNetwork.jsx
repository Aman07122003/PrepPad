import React, { useState } from 'react';
import { 
  ChevronDown, 
  Bookmark,
  CheckCircle,
  BookOpen, 
  Cpu, 
  FileText, 
  Shield, 
  Network, 
  Zap, 
  Target,
  Lock
} from 'lucide-react';
import ComputerNetworkData from './ComputerNetworkData';

const ComputerNetwork = () => {
  const [expandedChapters, setExpandedChapters] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedTopics, setBookmarkedTopics] = useState(new Set());
  const [completedTopics, setCompletedTopics] = useState(new Set());

  // Icon mapping for each CN category
  const getChapterIcon = (chapterId) => {
    const icons = {
      cn_intro: BookOpen,
      osi_model: Cpu,
      tcp_ip_model: Network,
      physical_layer: Zap,
      data_link_layer: FileText,
      network_layer: Network,
      transport_layer: Target,
      session_layer: Cpu,
      presentation_layer: BookOpen,
      application_layer: Network,
      network_security: Shield,
      network_troubleshooting: Lock
    };
    return icons[chapterId] || BookOpen;
  };

  // Color mapping
  const getChapterColor = (chapterId) => {
    const colors = {
      cn_intro: 'blue',
      osi_model: 'green',
      tcp_ip_model: 'yellow',
      physical_layer: 'purple',
      data_link_layer: 'indigo',
      network_layer: 'pink',
      transport_layer: 'red',
      session_layer: 'orange',
      presentation_layer: 'teal',
      application_layer: 'cyan',
      network_security: 'amber',
      network_troubleshooting: 'gray'
    };
    return colors[chapterId] || 'gray';
  };

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'bg-blue-100 text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'bg-green-100 text-green-600' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'bg-yellow-100 text-yellow-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'bg-purple-100 text-purple-600' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', icon: 'bg-indigo-100 text-indigo-600' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: 'bg-pink-100 text-pink-600' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'bg-red-100 text-red-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'bg-orange-100 text-orange-600' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: 'bg-teal-100 text-teal-600' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', icon: 'bg-cyan-100 text-cyan-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: 'bg-amber-100 text-amber-600' },
    gray: { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', icon: 'bg-gray-100 text-gray-600' }
  };

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const toggleBookmark = (topicId, e) => {
    e.stopPropagation();
    setBookmarkedTopics(prev => {
      const newBookmarks = new Set(prev);
      newBookmarks.has(topicId) ? newBookmarks.delete(topicId) : newBookmarks.add(topicId);
      return newBookmarks;
    });
  };

  const toggleComplete = (topicId, e) => {
    e.stopPropagation();
    setCompletedTopics(prev => {
      const newCompleted = new Set(prev);
      newCompleted.has(topicId) ? newCompleted.delete(topicId) : newCompleted.add(topicId);
      return newCompleted;
    });
  };

  // Filter chapters
  const filteredChapters = ComputerNetworkData.filter((chapter) => {
    const matchesCategory = selectedCategory === 'all' || chapter.id === selectedCategory;
    return matchesCategory;
  });

  // Progress stats
  const totalTopics = ComputerNetworkData.reduce((acc, chapter) => acc + chapter.topics.length, 0);
  const completedCount = completedTopics.size;
  const bookmarkedCount = bookmarkedTopics.size;
  const progressPercentage = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 px-3 py-4 sm:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-gray-200 mb-3 sm:mb-4">
            <Network className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Computer Network Guide
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Learn CN fundamentals with interactive topics, progress tracking, and interview-focused preparation
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
          <div className="flex flex-col gap-4">            
            <div className="flex gap-2 sm:gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm sm:text-base"
              >
                <option value="all">All Categories</option>
                {ComputerNetworkData.map(chapter => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
            <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">{totalTopics}</div>
              <div className="text-xs sm:text-sm text-blue-700 font-medium">Total Topics</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-xs sm:text-sm text-green-700 font-medium">Completed</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-amber-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-amber-600">{bookmarkedCount}</div>
              <div className="text-xs sm:text-sm text-amber-700 font-medium">Bookmarked</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-purple-600">{progressPercentage}%</div>
              <div className="text-xs sm:text-sm text-purple-700 font-medium">Progress</div>
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid gap-4 sm:gap-6">
          {filteredChapters.map((chapter) => {
            const Icon = getChapterIcon(chapter.id);
            const color = getChapterColor(chapter.id);
            const colors = colorClasses[color];
            const isExpanded = expandedChapters[chapter.id];
            const chapterTopicCount = chapter.topics.length;
            const completedChapterTopics = chapter.topics.filter((_, index) => 
              completedTopics.has(`${chapter.id}-${index}`)
            ).length;
            const chapterProgress = Math.round((completedChapterTopics / chapterTopicCount) * 100);

            return (
              <div
                key={chapter.id}
                className={`bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                {/* Chapter Header */}
                <div
                  className="p-4 sm:p-6 cursor-pointer hover:bg-opacity-50 transition-colors"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div className="flex items-start sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${colors.icon} flex-shrink-0 mt-1`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                            {chapter.title}
                          </h2>
                          <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${colors.bg} ${colors.text} self-start sm:self-auto`}>
                            {chapterTopicCount} topics
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              chapterProgress === 100 ? 'bg-green-500' : colors.text.replace('text-', 'bg-')
                            }`}
                            style={{ width: `${chapterProgress}%` }}
                          />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {completedChapterTopics} of {chapterTopicCount} completed ({chapterProgress}%)
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-2 rounded-lg transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 bg-gray-100' : 'bg-gray-50'
                    }`}>
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </div>
                  </div>
                </div>

                {/* Topics List */}
                {isExpanded && (
                  <div className="border-t border-gray-100">
                    <div className="p-4 sm:p-6">
                      <div className="grid gap-2 sm:gap-3">
                        {chapter.topics.map((topic, index) => {
                          const topicId = `${chapter.id}-${index}`;
                          const isBookmarked = bookmarkedTopics.has(topicId);
                          const isCompleted = completedTopics.has(topicId);

                          return (
                            <div
                              key={index}
                              className={`group flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 ${
                                isCompleted 
                                  ? 'border-green-200 bg-green-50/50' 
                                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                              }`}
                            >
                              <button
                                onClick={(e) => toggleComplete(topicId, e)}
                                className="flex-shrink-0"
                              >
                                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors ${
                                  isCompleted 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                                }`}>
                                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                              </button>
                              
                              <div className="flex-1 min-w-0">
                                <h3 className={`font-medium text-sm sm:text-base leading-relaxed break-words ${
                                  isCompleted 
                                    ? 'text-green-800 line-through' 
                                    : 'text-gray-900 group-hover:text-blue-800'
                                }`}>
                                  {topic}
                                </h3>
                              </div>
                              
                              <button
                                onClick={(e) => toggleBookmark(topicId, e)}
                                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                                  isBookmarked 
                                    ? 'bg-amber-100 text-amber-600' 
                                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                                }`}
                              >
                                <Bookmark className={`w-3 h-3 sm:w-4 sm:h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>
            {filteredChapters.length} of {ComputerNetworkData.length} categories showing • 
            {' '}{completedCount} of {totalTopics} topics completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComputerNetwork;
