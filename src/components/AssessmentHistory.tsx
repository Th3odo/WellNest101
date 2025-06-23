import React from 'react';

const AssessmentHistory: React.FC = () => {
  const [history, setHistory] = React.useState<Array<{
    score: number;
    maxScore: number;
    percentage: number;
    date: string;
    time: string;
  }>>([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('wellbeingHistory') || '[]');
    setHistory(data);
  }, []);

  if (history.length === 0) {
    return <div className="text-center text-gray-500 dark:text-gray-400">No assessment history yet.</div>;
  }

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Assessment History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Score</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Percentage</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {history.map((item, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 whitespace-nowrap">{item.date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.time}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.score} / {item.maxScore}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessmentHistory;
