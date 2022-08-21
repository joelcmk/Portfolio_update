import Pokemon from '../Images/pokemon.png';
import Movies from '../Images/movies.png';
import Chat from '../Images/chat.png';
import Meetup from '../Images/meetup.png';
import Todo from '../Images/todo.png';
import Budget from '../Images/budget.png';
function Projects() {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 h-96">
        <div className="flex justify-center items-center  bg-gradient-to-tr from-rose-300 to-teal-400 mb-10 rounded-lg ">
          <img className="w-96 h-80" src={Budget} alt="pokemon" />
        </div>
        <diiv className="text-white font-sans my-0">
          <h3 className="text-4xl font-semibold">Project Name</h3>
          <p className="text-xl font-thin my-2 max-w-md">
            Project description, this is a text of how the project description
            should look.
          </p>
          <a className="font-bold">VIEW PROJECT</a>
        </diiv>
      </div>
    </div>
  );
}

export default Projects;
