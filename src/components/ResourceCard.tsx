import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Assuming you are using a theme context

export interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  author?: string;
  date?: string;
  tag?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  link,
  author,
  date,
  tag,
}) => {
  const { theme } = useTheme(); // Assuming you use theme context for dark/light mode

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">
        {title}
      </h3>

      {tag && (
        <span className="inline-block text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300 px-2 py-1 rounded-full mb-2">
          {tag}
        </span>
      )}

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>

      {(author || date) && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          {author && <span>By {author}</span>}
          {author && date && <span className="mx-1">•</span>}
          {date && <span>{date}</span>}
        </div>
      )}

      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
        Explore
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </a>
  );
};

export default ResourceCard;
