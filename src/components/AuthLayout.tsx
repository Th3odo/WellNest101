import React from 'react';
import { Brain } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
      <div className={`max-w-md w-full space-y-8 p-8 rounded-xl shadow-lg transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="text-center">
          <Brain className="mx-auto h-12 w-12 text-primary-600 dark:text-primary-400" />
          <h2 className={`mt-6 text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};