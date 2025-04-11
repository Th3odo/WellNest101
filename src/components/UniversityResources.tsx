import React from 'react';
import { ResourceCard } from './ResourceCard'; // Import the ResourceCard component

const UniversityResources: React.FC = () => {
  const resources = [
    {
      title: "Study Tips for University Students",
      description: "A comprehensive guide to mastering your studies with productivity hacks.",
      link: "https://www.example.com/study-tips",
      author: "John Doe",
      date: "March 2025",
      tag: "Productivity",
    },
    {
      title: "Mental Health Resources for Students",
      description: "Resources to help you manage stress and anxiety during university life.",
      link: "https://www.example.com/mental-health",
      author: "Jane Smith",
      date: "April 2025",
      tag: "Mental Health",
    },
    {
      title: "Scholarships and Financial Aid",
      description: "Find scholarships, grants, and other financial resources for students.",
      link: "https://www.example.com/scholarships",
      author: "University Admin",
      date: "February 2025",
      tag: "Finance",
    },
    // Add more resources as needed
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
          author={resource.author}
          date={resource.date}
          tag={resource.tag}
        />
      ))}
    </div>
  );
};

export default UniversityResources;
