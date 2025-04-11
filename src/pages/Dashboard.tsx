import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {
  Brain, Calendar, MessageSquare, Users, LogOut,
  Sun, Moon, Activity, BookOpen, Heart, MessageCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ResourceCard } from '../components/ResourceCard';
import WellbeingAssessment from '../components/WellbeingAssessment';
import ResourceRecommendations from '../components/ResourceRecommendations';
import AIChat from '../components/AIChat';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('resources');

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Add Tawk.to Live Chat Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67f969be43ce3e190eb80c9b/1ioj4a4b1';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Quote slideshow data
  const quoteData = [
    {
      text: "Your mental health matters 🌿",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1470&q=80",
    },
    {
      text: "It's okay to rest — you're doing your best 💛",
      image: "https://images.unsplash.com/photo-1537182531527-72de9f5c5b6b?auto=format&fit=crop&w=1470&q=80",
    },
    {
      text: "Breathe. You’re stronger than you think 💪",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80",
    },
    {
      text: "Small steps every day lead to big changes 🌈",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quoteData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mental Health and Student Resources (including DUT)
  const resources = [
    {
      title: 'DUT Student Counselling',
      description: 'Provides counselling and psychological services to DUT students.',
      link: 'https://www.dut.ac.za/student_services/student_counselling_and_health/student_counselling_centre/',
    },
    {
      title: 'DUT Student Clinic',
      description: 'The clinic offers a comprehensive service within the Department of Student Counselling and Health with ease of referrals to and from the Student Counselling and HIV Centre',
      link: 'https://www.dut.ac.za/student-health-clinic-durban/',
    },
    {
      title: 'Headspace',
      description: 'Meditation and mindfulness app to improve mental health.',
      link: 'https://www.headspace.com/',
    },
    {
      title: 'Mindful Schools',
      description: 'Free resources and programs to support mindfulness in education.',
      link: 'https://www.meditation.org.za/',
    },
    {
      title: 'Mental Health Support - SADAG',
      description: 'South African Depression and Anxiety Group offering resources for mental health.',
      link: 'https://www.sadag.org/',
    },
    {
      title: 'Psychological Services at DUT',
      description: 'Personal counseling for academic or emotional challenges at DUT.',
      link: 'https://www.dut.ac.za/psychological_services/',
    },
    {
      title: 'Campus Health Services - DUT',
      description: 'Health and wellness services for DUT students to manage their overall well-being.',
      link: 'https://www.dut.ac.za/campus_health_services/',
    },
    {
      title: 'University of Pretoria Mental Health Resources',
      description: 'Mental health resources and support provided for students at UP.',
      link: 'https://www.up.ac.za/psychological-services',
    },
    {
      title: 'National Student Mental Health Network',
      description: 'National resources and mental health support available for students across South Africa.',
      link: 'https://www.suicide.org.za/student-mental-health',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">WellNest</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={handleSignOut}
                className="ml-4 flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">

          {/* Welcome */}
          <div className="mb-8 animate-fade-in-up">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-2">
                👋 Welcome to WellNest!
              </h1>
              <p className="text-center text-xl text-gray-600 dark:text-gray-300">
                Take a moment for yourself today. Choose a resource, check in on your wellbeing, or chat with our AI Assistant.
              </p>
            </div>
          </div>

          {/* Slideshow with Background Images */}
          <div
            className="relative mt-6 h-48 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md transition-all duration-1000"
            style={{
              backgroundImage: `url("${quoteData[currentIndex].image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 text-center transition-opacity duration-1000">
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
                {quoteData[currentIndex].text}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            <nav className="-mb-px flex space-x-8 min-w-max">
              {[
                { key: 'resources', label: 'Resources', icon: BookOpen },
                { key: 'assessment', label: 'Wellbeing Check', icon: Activity },
                { key: 'aichat', label: 'AI Assistant', icon: MessageCircle },
                { key: 'recommendations', label: 'Recommendations', icon: Heart },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`transition-all duration-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === key
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <Icon className="inline mr-2 h-4 w-4" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6 animate-fade-in-up">
            {activeTab === 'resources' && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <ResourceCard
                    key={resource.title}
                    title={resource.title}
                    description={resource.description}
                    link={resource.link}
                  />
                ))}
              </div>
            )}
            {activeTab === 'assessment' && <WellbeingAssessment />}
            {activeTab === 'aichat' && <AIChat />}
            {activeTab === 'recommendations' && <ResourceRecommendations />}
          </div>
        </div>
      </main>
    </div>
  );
};
