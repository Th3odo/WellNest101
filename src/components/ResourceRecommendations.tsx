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

  // Enhanced recommendations with links and music for meditation/sleep
  const getRecommendations = () => {
    const recs = [];

    if (preferences.stress || preferences.general) {
      recs.push({
        title: "Mindfulness Meditation Series",
        description: "AI-curated meditation sessions based on your stress patterns. Includes guided audio and video.",
        icon: <Activity className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Stress Management",
        widget: (
          <iframe
            title="Deezer Meditation Playlist"
            src="https://widget.deezer.com/widget/dark/playlist/1313621735"
            width="100%"
            height="150"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media; clipboard-write"
            className="rounded-lg mt-3"
          ></iframe>
        )
      });
      recs.push({
        title: "Relaxing Meditation Music",
        description: "Listen to calming music to help you relax and meditate.",
        icon: <Heart className="h-5 w-5 text-pink-600 dark:text-pink-400" />,
        category: "Meditation Music",
        widget: (
          <iframe
            title="Deezer Relaxing Music"
            src="https://widget.deezer.com/widget/dark/playlist/93489551"
            width="100%"
            height="150"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media; clipboard-write"
            className="rounded-lg mt-3"
          ></iframe>
        )
      });
    }

    if (preferences.sleep || preferences.general) {
      recs.push({
        title: "Sleep Hygiene Workshop",
        description: "Learn techniques to improve sleep quality with AI-personalized tips.",
        icon: <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Sleep Improvement",
        widget: (
          <iframe
            title="Deezer Sleep Playlist"
            src="https://widget.deezer.com/widget/dark/playlist/908622995"
            width="100%"
            height="150"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media; clipboard-write"
            className="rounded-lg mt-3"
          ></iframe>
        )
      });
      recs.push({
        title: "Deep Sleep Music",
        description: "Soothing music to help you fall asleep faster and sleep deeper.",
        icon: <Heart className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
        category: "Sleep Music",
        widget: (
          <iframe
            title="Deezer Deep Sleep Music"
            src="https://widget.deezer.com/widget/dark/playlist/1313621735"
            width="100%"
            height="150"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media; clipboard-write"
            className="rounded-lg mt-3"
          ></iframe>
        )
      });
    }

    if (preferences.social || preferences.general) {
      recs.push({
        title: "Peer Connection Program",
        description: "AI-matched peer support based on your interests and needs.",
        icon: <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Social Connection",
        link: "https://www.togetherall.com/en-us/",
        linkLabel: "Find Peers"
      });
    }

    if (preferences.academic || preferences.general) {
      recs.push({
        title: "Smart Study Planner",
        description: "AI-powered scheduling tool that adapts to your workload and energy levels.",
        icon: <Brain className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "Academic Support",
        link: "https://www.notion.so/templates/student",
        linkLabel: "Try Planner"
      });
    }

    if (recs.length === 0) {
      recs.push({
        title: "General Wellbeing Resources",
        description: "Explore our full library of wellbeing resources",
        icon: <Heart className="h-5 w-5 text-primary-600 dark:text-primary-400" />,
        category: "General",
        link: "https://www.mind.org.uk/information-support/tips-for-everyday-living/wellbeing/",
        linkLabel: "Explore Resources"
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
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow bg-gradient-to-br from-white via-primary-50 to-gray-50 dark:from-gray-800 dark:via-primary-900 dark:to-gray-900">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow">
                  {rec.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">{rec.title}</h3>
                  <p className="mt-1 text-base text-gray-700 dark:text-gray-200">{rec.description}</p>
                  <span className="mt-2 inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    {rec.category}
                  </span>
                  {rec.widget && (
                    <div className="w-full">{rec.widget}</div>
                  )}
                  {rec.link && (
                    <a
                      href={rec.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 transition"
                    >
                      {rec.linkLabel || 'Explore'}
                    </a>
                  )}
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
