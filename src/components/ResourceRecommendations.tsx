import React, { useState } from 'react';
import { Brain, BookOpen, Users, Activity, Heart } from 'lucide-react';

const ResourceRecommendations = () => {
  const [preferences, setPreferences] = useState({
    stress: false,
    sleep: false,
    social: false,
    academic: false,
    general: true
  });

  // Mock AI recommendations based on preferences
  const getRecommendations = () => {
    const recs = [];
    
    if (preferences.stress || preferences.general) {
      recs.push({
        title: "Mindfulness Meditation Series",
        description: "AI-curated meditation sessions based on your stress patterns",
        icon: <Activity className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Stress Management"
      });
    }
    
    if (preferences.sleep || preferences.general) {
      recs.push({
        title: "Sleep Hygiene Workshop",
        description: "Learn techniques to improve sleep quality with AI-personalized tips",
        icon: <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Sleep Improvement"
      });
    }
    
    if (preferences.social || preferences.general) {
      recs.push({
        title: "Peer Connection Program",
        description: "AI-matched peer support based on your interests and needs",
        icon: <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Social Connection"
      });
    }
    
    if (preferences.academic || preferences.general) {
      recs.push({
        title: "Smart Study Planner",
        description: "AI-powered scheduling tool that adapts to your workload and energy levels",
        icon: <Brain className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Academic Support"
      });
    }
    
    if (recs.length === 0) {
      recs.push({
        title: "General Wellbeing Resources",
        description: "Explore our full library of wellbeing resources",
        icon: <Heart className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "General"
      });
    }
    
    return recs;
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
      general: false // Turn off general if any specific is selected
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI Recommendation Preferences</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Select the areas you'd like personalized recommendations for:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries({
            stress: "Stress Management",
            sleep: "Sleep Improvement",
            social: "Social Connection",
            academic: "Academic Support",
            general: "General Wellbeing"
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => togglePreference(key as keyof typeof preferences)}
              className={`p-4 rounded-lg border ${preferences[key as keyof typeof preferences] 
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900 text-primary-800 dark:text-primary-200' 
                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personalized Recommendations</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Based on your preferences and previous interactions with WellNest
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getRecommendations().map((rec, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                  {rec.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{rec.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{rec.description}</p>
                  <span className="mt-2 inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    {rec.category}
                  </span>
                  <button className="mt-3 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary-600 hover:bg-primary-700">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceRecommendations;