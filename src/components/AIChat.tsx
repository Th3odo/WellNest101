import React, { useState } from 'react';
import { askGemini } from '../utils/gemini';

const AIChat = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    const aiResponse = await askGemini(userInput);
    setResponse(aiResponse);
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Ask our AI Assistant</h2>
      <textarea
        rows="4"
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md mb-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your question..."
      ></textarea>
      <button
        onClick={handleAsk}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask Gemini'}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Gemini Says:</h3>
          <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIChat;
