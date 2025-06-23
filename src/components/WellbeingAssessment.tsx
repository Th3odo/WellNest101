import React, { useState } from 'react';

const questions: string[] = [
  "I feel optimistic about the future.",
  "I’ve been feeling relaxed and calm.",
  "I’ve had energy to spare.",
  "I’ve been dealing with problems well.",
  "I feel connected to others."
];

type Option = {
  label: string;
  value: number;
};

const options: Option[] = [
  { label: "Never", value: 1 },
  { label: "Rarely", value: 2 },
  { label: "Sometimes", value: 3 },
  { label: "Often", value: 4 },
  { label: "Always", value: 5 }
];

const generateRecommendations = (answers: number[]): string[] => {
  const recs: string[] = [];
  
  // Low score on feeling relaxed—recommend deep breathing and meditation
  if (answers[1] < 3) {
    recs.push("Practice deep breathing exercises and try guided meditation to help calm your mind.");
  }
  // Low score on energy—suggest gentle stretching or yoga
  if (answers[2] < 3) {
    recs.push("Consider a short yoga session or gentle stretching to boost your energy.");
  }
  // Low score on problem handling—advise journaling or mindfulness techniques
  if (answers[3] < 3) {
    recs.push("Try journaling or mindfulness exercises to better manage your challenges.");
  }
  // Low score on connection—recommend social activities and breathing exercises to reduce anxiety
  if (answers[4] < 3) {
    recs.push("Engage in social activities and consider regular breathing exercises to ease anxiety.");
  }
  // Overall average score check—if overall wellbeing is low, provide a general recommendation.
  const total = answers.reduce((sum, a) => sum + a, 0);
  const average = total / questions.length;
  if (average < 3) {
    recs.push("Consider adopting a daily routine that includes deep breathing and meditation for overall wellbeing.");
  }
  
  // If there are no specific recommendations, offer a positive note with a light suggestion.
  if (recs.length === 0) {
    recs.push("Your wellbeing seems balanced! Keep up the good work and consider occasional deep breathing exercises to maintain calm.");
  }
  
  return recs;
};

const WellbeingAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleAnswer = (value: number): void => {
    const updatedAnswers = [...answers, value];
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const restart = (): void => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  if (completed) {
    const total = answers.reduce((acc, val) => acc + val, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((total / maxScore) * 100);
    const recommendations = generateRecommendations(answers);

    return (
      <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Your Wellbeing Score
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
          Score: {total} / {maxScore} ({percentage}%)
        </p>
        <div className="mb-6">
          {recommendations.map((rec, index) => (
            <p key={index} className="text-center text-gray-700 dark:text-gray-200 mb-2">
              {rec}
            </p>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={restart}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {questions[currentQuestion]}
      </p>
      <div className="space-y-4">
        {options.map((option, index) => {
          // Assign a color and emoji for each option
          const colorMap = [
            { bg: "bg-red-100 dark:bg-red-900", hover: "hover:bg-red-200 dark:hover:bg-red-700", text: "text-red-900 dark:text-white", emoji: "😞" },
            { bg: "bg-orange-100 dark:bg-orange-900", hover: "hover:bg-orange-200 dark:hover:bg-orange-700", text: "text-orange-900 dark:text-white", emoji: "😕" },
            { bg: "bg-yellow-100 dark:bg-yellow-900", hover: "hover:bg-yellow-200 dark:hover:bg-yellow-700", text: "text-yellow-900 dark:text-white", emoji: "😐" },
            { bg: "bg-green-100 dark:bg-green-900", hover: "hover:bg-green-200 dark:hover:bg-green-700", text: "text-green-900 dark:text-white", emoji: "🙂" },
            { bg: "bg-blue-100 dark:bg-blue-900", hover: "hover:bg-blue-200 dark:hover:bg-blue-700", text: "text-blue-900 dark:text-white", emoji: "😃" },
          ];
          const { bg, hover, text, emoji } = colorMap[index];
          return (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className={`w-full px-4 py-3 font-semibold text-lg flex items-center justify-center gap-3 rounded-xl shadow-sm transition ${bg} ${hover} ${text} border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
            >
              <span className="text-2xl">{emoji}</span>
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WellbeingAssessment;

