import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, Sun, Moon, UserCircle, Settings, Share2, MessageSquare, CheckCircle2 } from 'lucide-react';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [notes, setNotes] = useState(`Interview Notes Template:

Candidate Name: John Smith
Position: Senior Software Engineer
Date: ${new Date().toLocaleDateString()}

Key Points:
- Technical Skills:
- Work Experience:
- Communication Skills:
- Cultural Fit:

Additional Notes:
`);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const sampleQuestions = [
    {
      question: "Tell me about your background and experience.",
      notes: "Listen for: relevant technical experience, project highlights, and career progression"
    },
    {
      question: "What interests you about this position?",
      notes: "Look for: alignment with company values, understanding of role, genuine enthusiasm"
    },
    {
      question: "Can you describe a challenging project you've worked on?",
      notes: "Focus on: problem-solving abilities, teamwork, technical depth"
    },
    {
      question: "How do you handle difficult situations in the workplace?",
      notes: "Evaluate: conflict resolution, communication skills, professionalism"
    },
    {
      question: "Where do you see yourself in 5 years?",
      notes: "Consider: career goals, ambition, alignment with company growth"
    },
  ];

  const participants = {
    interviewer: {
      name: "Sarah Parker",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    interviewee: {
      name: "John Smith",
      role: "Software Engineer Candidate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  };

  if (showLanding) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Header */}
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm p-4 sticky top-0`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Video className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className="text-xl font-bold">IntPrep</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setShowLanding(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Start Interview
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Welcome to IntPrep</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              The preparation for online interviews - A seamless, professional, and intuitive interview platform
            </p>
            <button
              onClick={() => setShowLanding(false)}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg"
            >
              Start Your Interview
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-4">
                {[
                  "Real-Time Notes Section",
                  "Question Panel",
                  "Integrated Controls",
                  "Light/Dark Mode Toggle",
                  "Participant Display",
                  "Pre-Filled Content",
                  "User-Friendly Design"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className="text-2xl font-semibold mb-4">About the Platform</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                IntPrep is designed to mimic the Google Meet experience while enhancing the hiring process. 
                Our interface is built to ensure smooth communication between interviewers and candidates, 
                with features tailored for real-time note-taking, structured question management, and an 
                engaging interview experience.
              </p>
            </div>
          </div>

          {/* Copyright Section */}
          <footer className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="text-center">
              <p className="mb-4">
                Copyright © 2025 IntPrep. All Rights Reserved.
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                This website, including its design, layout, features, and functionality, is the intellectual 
                property of Vikas T G, a CSE Engineering student at JSS Academy of Technical Education, Bengaluru. 
                Unauthorized reproduction, modification, or distribution of any part of this platform is strictly prohibited.
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                For inquiries or permissions, contact: <a href="mailto:vikastg2000@gmail.com" className="text-blue-500 hover:underline">vikastg2000@gmail.com</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-2">
          <Video className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          <h1 className="text-xl font-semibold">IntPrep</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowLanding(true)}
            className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            Exit Interview
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Video Area */}
        <div className="w-3/5 p-4 flex flex-col space-y-4">
          <div className={`flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} rounded-lg relative overflow-hidden`}>
            {/* Main video feed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={participants.interviewee.image}
                alt={participants.interviewee.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-16 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-lg text-white">
                {participants.interviewee.name} • {participants.interviewee.role}
              </div>
            </div>
            
            {/* Small self-view */}
            <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={participants.interviewer.image}
                alt={participants.interviewer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-sm text-white">
                {participants.interviewer.name}
              </div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-gray-800 bg-opacity-90 rounded-full p-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-full ${isMuted ? 'bg-red-500' : 'hover:bg-gray-700'}`}
              >
                {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
              </button>
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-2 rounded-full ${isVideoOff ? 'bg-red-500' : 'hover:bg-gray-700'}`}
              >
                {isVideoOff ? <VideoOff className="w-5 h-5 text-white" /> : <Video className="w-5 h-5 text-white" />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-700">
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-700">
                <MessageSquare className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Questions Panel */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-4`}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Interview Questions</h2>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Question {currentQuestionIndex + 1} of {sampleQuestions.length}
              </div>
            </div>
            
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 mb-4`}>
              <p className="text-lg mb-2">{sampleQuestions[currentQuestionIndex].question}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {sampleQuestions[currentQuestionIndex].notes}
              </p>
            </div>

            <div className="flex justify-between">
              <button
                className={`px-4 py-2 rounded-lg disabled:opacity-50 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(i => i - 1)}
              >
                Previous Question
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                disabled={currentQuestionIndex === sampleQuestions.length - 1}
                onClick={() => setCurrentQuestionIndex(i => i + 1)}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Notes */}
        <div className="w-2/5 p-4">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm h-full p-4 flex flex-col`}>
            <h2 className="text-lg font-semibold mb-4">Interview Notes</h2>
            <textarea
              className={`flex-1 w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              }`}
              placeholder="Take notes during the interview..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
