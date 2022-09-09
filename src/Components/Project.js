function Project({ project, url, css }) {
  console.log(url);
  return (
    <div className="w-2/5 m-5 mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <a href={url} target="_blank" rel="noreferrer">
        <div
          className={`flex justify-center items-center shadow-md ${project.background} mb-10 rounded-lg`}
        >
          <img className={css} src={project.projectImg} alt="pokemon" />
        </div>

        <diiv className="text-black font-sans">
          <h3 className="text-4xl font-semibold">{project.projectName}</h3>
          <p className="text-xl font-thin my-2 ">
            {project.projectDescription}
          </p>
          <a
            href={url}
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            VIEW PROJECT
          </a>
        </diiv>
      </a>
    </div>
  );
}

export default Project;
