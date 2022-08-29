function Project({ project, url, css }) {
  console.log(url);
  return (
    <div className="w-2/5 m-5 mb-20">
      <div
        className={`flex justify-center items-center shadow-md ${project.background} mb-10 rounded-lg`}
      >
        <img className={css} src={project.projectImg} alt="pokemon" />
      </div>

      <diiv className="text-black font-sans">
        <h3 className="text-4xl font-semibold">{project.projectName}</h3>
        <p className="text-xl font-thin my-2 max-w-md">
          {project.projectDescription}
        </p>
        <a href={url} className="font-bold hover:underline">
          VIEW PROJECT
        </a>
      </diiv>
    </div>
  );
}

export default Project;
