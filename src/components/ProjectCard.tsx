const ProjectCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
      <div className="border border-gray-800 p-6 relative mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <svg className="absolute bottom-4 right-4 w-6 h-6 transition-transform transform hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    );
};
  
  export default ProjectCard;