export default function ProjectCard({ project }:any) {  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}
