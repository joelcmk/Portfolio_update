import Pokemon from '../Images/pokemon.png';
import Movies from '../Images/movies.png';
import Chat from '../Images/chat.png';
import Meetup from '../Images/meetup.png';
import Todo from '../Images/todo.png';
function Projects() {
  return (
    <div className="projects flex flex-wrap justify-center">
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Movies} alt="pokemon" />
      </div>
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Pokemon} alt="pokemon" />
      </div>
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Chat} alt="pokemon" />
      </div>
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Meetup} alt="pokemon" />
      </div>
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Todo} alt="pokemon" />
      </div>
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Chat} alt="pokemon" />
      </div>
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <img className="w-60 h-60" src={Chat} alt="pokemon" />
      </div>
    </div>
  );
}

export default Projects;
