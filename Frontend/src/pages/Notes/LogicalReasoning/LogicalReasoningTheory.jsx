import React, { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Lightbulb, Target, Zap, HelpCircle, BookOpen } from "lucide-react";

export default function LogicalReasoningTheory() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTopic = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clockTopics = [
    {
      topicName: "Mirror Image of Clock",
      theory: "Mirror image questions require finding the reflection of the clock time in a vertical mirror placed opposite the clock.",
      concepts: [
        "Mirror image time = 12:00 - Actual Time",
        "If result is 0:00, write 12:00",
        "Think of it as a left-right reversal"
      ],
      tricks: [
        "Subtract the given time from 11:60 instead of 12:00 (easier for calculation).",
        "For times greater than 6:00, the mirror image will be less than 6:00 and vice versa."
      ],
      approach: "Step 1: Write down the given clock time. Step 2: Subtract it from 11:60. Step 3: Adjust if you get 60 minutes.",
      tips: [
        "Always check whether it's AM or PM in word problems.",
        "Draw a quick sketch for tricky times like 11:50 or 12:05."
      ],
      questions: [
        { q: "Find the mirror image of 2:20.", a: "9:40" },
        { q: "Find the mirror image of 11:50.", a: "12:10" }
      ]
    },
    {
      topicName: "Water Image of Clock",
      theory: "Water image questions assume the clock is placed on water. The reflection appears upside down, i.e., top-bottom reversal.",
      concepts: [
        "Water image time = 6:00 - Actual Time",
        "Adjust when minutes become negative",
        "Think of it as vertical inversion"
      ],
      tricks: [
        "Instead of subtracting, add till you reach 6:00 for simplicity.",
        "For exact 6 o'clock, water image = same as actual time."
      ],
      approach: "Step 1: Take given time. Step 2: Subtract from 5:60 (easier than 6:00). Step 3: Adjust hours/minutes properly.",
      tips: [
        "If confusion, just draw top-bottom flip of hands.",
        "Remember: water image of 12:00 = 6:00."
      ],
      questions: [
        { q: "Find the water image of 3:15.", a: "2:45" },
        { q: "Find the water image of 6:00.", a: "6:00" }
      ]
    },
    {
      topicName: "Find the Angle",
      theory: "These problems deal with the angle between hour and minute hands at a given time.",
      concepts: [
        "Hour hand moves = 0.5° per minute",
        "Minute hand moves = 6° per minute",
        "Formula: |(30 × H – 11/2 × M)|"
      ],
      tricks: [
        "At every exact hour (like 3:00, 4:00), angle = multiple of 30°.",
        "For quick check, maximum angle = 180°, beyond that use 360° - angle."
      ],
      approach: "Step 1: Apply formula. Step 2: Take absolute difference. Step 3: If >180°, subtract from 360°.",
      tips: [
        "Memorize common angles (3:00 = 90°, 6:00 = 180°, 9:00 = 90°).",
        "Use proportion: Each minute → 5.5° change."
      ],
      questions: [
        { q: "Find the angle at 3:15.", a: "7.5°" },
        { q: "Find the angle at 9:30.", a: "105°" }
      ]
    },
    {
      topicName: "External Angle (Reflex Angle)",
      theory: "External angle problems involve finding the larger angle between the two hands of the clock.",
      concepts: [
        "Internal angle = |(30 × H – 11/2 × M)|",
        "External angle = 360° – Internal angle"
      ],
      tricks: [
        "Always calculate internal angle first, then subtract from 360°.",
        "Shortcut: Whichever is smaller (internal/external), the other is 360° – smaller."
      ],
      approach: "Step 1: Find the smaller angle with standard formula. Step 2: Subtract from 360° to get external angle.",
      tips: [
        "External angle is always ≥180°.",
        "Check both angles when asked to 'find angle' – question may mean reflex angle."
      ],
      questions: [
        { q: "Find external angle at 2:20.", a: "220°" },
        { q: "Find external angle at 5:40.", a: "200°" }
      ]
    },
    {
      topicName: "Overlap / Perpendicular / Opposite Hands",
      theory: "These questions are based on relative speed of hands and specific positions like overlap, right angle, or straight line.",
      concepts: [
        "Relative speed of hands = 5.5° per minute",
        "Hands overlap every 65 5/11 minutes",
        "Hands are perpendicular every 32 8/11 minutes",
        "Hands opposite every 65 5/11 minutes × 2"
      ],
      tricks: [
        "Use relative speed (5.5°/min) × time = angle covered.",
        "For perpendicular, angle = 90° or 270°."
      ],
      approach: "Step 1: Use relative speed to calculate time taken for given angle. Step 2: Add to starting time.",
      tips: [
        "Remember: 11 overlaps in 12 hours.",
        "Hands are perpendicular 22 times in 12 hours."
      ],
      questions: [
        { q: "How many times do the hands overlap in 12 hours?", a: "11 times" },
        { q: "At what time after 3:00 will hands be perpendicular?", a: "Approx. 3:16" }
      ]
    },
    {
      topicName: "Clock Slow and Fast (Faulty Clock)",
      theory: "Covers problems where the clock gains or loses time, showing incorrect readings.",
      concepts: [
        "Gain of time → Clock ahead of actual time",
        "Loss of time → Clock behind actual time",
        "Error ratio = (Gained/Lost Time ÷ Actual Time)"
      ],
      tricks: [
        "Always calculate ratio of wrong time to correct time.",
        "Convert all into minutes for easier calculation."
      ],
      approach: "Step 1: Write actual vs shown time. Step 2: Find difference. Step 3: Use proportion for other intervals.",
      tips: [
        "Draw a quick table of actual vs faulty readings.",
        "Check whether it is gaining or losing carefully."
      ],
      questions: [
        { q: "A clock gains 5 minutes every hour. How much will it gain in 6 hours?", a: "30 minutes" },
        { q: "A clock is 10 minutes slow at 9 am and 5 minutes fast at 9 pm. Find daily gain.", a: "30 minutes" }
      ]
    }
  ];

  const getSectionIcon = (sectionName) => {
    const icons = {
      "Theory": BookOpen,
      "Key Concepts": Lightbulb,
      "Tricks": Zap,
      "Approach": Target,
      "Tips": HelpCircle,
      "Practice Questions": Clock
    };
    const IconComponent = icons[sectionName] || HelpCircle;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Clock Reasoning Mastery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master clock reasoning with comprehensive theory, smart tricks, and practical examples. 
            Expand each topic to unlock powerful problem-solving techniques.
          </p>
        </div>

        {/* Enhanced Accordion Topics */}
        <div className="space-y-6">
          {clockTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Enhanced Accordion Header */}
              <button
                onClick={() => toggleTopic(index)}
                className="w-full flex justify-between items-center px-6 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-left">{topic.topicName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-normal opacity-90 group-hover:opacity-100">
                    {openIndex === index ? "Collapse" : "Expand"}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-transform" />
                  )}
                </div>
              </button>

              {/* Enhanced Accordion Content */}
              {openIndex === index && (
                <div className="p-6 space-y-8 animate-fadeIn">
                  {/* Theory Section */}
                  <section className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <h3 className="flex items-center text-md font-semibold text-blue-800 mb-3">
                      {getSectionIcon("Theory")}
                      <span className="ml-2">Theory</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-6">{topic.theory}</p>
                  </section>

                  {/* Two-column layout for smaller sections */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Concepts */}
                    {topic.concepts && (
                      <section className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="flex items-center text-md font-semibold text-green-800 mb-3">
                          {getSectionIcon("Key Concepts")}
                          <span className="ml-2">Key Concepts</span>
                        </h3>
                        <ul className="space-y-2 pl-6">
                          {topic.concepts.map((concept, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-green-500 mr-2">•</span>
                              {concept}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Tricks */}
                    {topic.tricks && (
                      <section className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                        <h3 className="flex items-center text-md font-semibold text-amber-800 mb-3">
                          {getSectionIcon("Tricks")}
                          <span className="ml-2">Quick Tricks</span>
                        </h3>
                        <ul className="space-y-2 pl-6">
                          {topic.tricks.map((trick, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-amber-500 mr-2">⚡</span>
                              {trick}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Approach */}
                    {topic.approach && (
                      <section className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                        <h3 className="flex items-center text-md font-semibold text-purple-800 mb-3">
                          {getSectionIcon("Approach")}
                          <span className="ml-2">Step-by-Step Approach</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 whitespace-pre-line">{topic.approach}</p>
                      </section>
                    )}

                    {/* Tips */}
                    {topic.tips && (
                      <section className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                        <h3 className="flex items-center text-md font-semibold text-rose-800 mb-3">
                          {getSectionIcon("Tips")}
                          <span className="ml-2">Pro Tips</span>
                        </h3>
                        <ul className="space-y-2 pl-6">
                          {topic.tips.map((tip, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-rose-500 mr-2">💡</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>

                  {/* Questions - Full Width */}
                  {topic.questions && (
                    <section className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <h3 className="flex items-center text-md font-semibold text-gray-800 mb-4">
                        {getSectionIcon("Practice Questions")}
                        <span className="ml-2">Practice Questions</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {topic.questions.map((q, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200 group"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                  Q{i + 1}. {q.q}
                                </h4>
                                <div className="mt-2 p-3 bg-green-50 rounded-lg border border-green-200">
                                  <p className="text-sm text-green-800 font-medium">
                                    Answer: <span className="font-bold">{q.a}</span>
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
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Master these concepts to excel in competitive exams and logical reasoning tests.
          </p>
        </div>
      </div>
    </div>
  );
}