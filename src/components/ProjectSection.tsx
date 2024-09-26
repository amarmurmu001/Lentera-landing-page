import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  const projects = [
    {
      title: "Market research + brand strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc vulputate libero et velit."
    },
    {
      title: "Digital marketing campaign",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Brand identity design",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Website development",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          description={project.description} 
        />
      ))}
    </div>
  );
};

export default ProjectSection;