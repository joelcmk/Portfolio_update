import Pokemon from '../Images/pokemon.png';
import Movies from '../Images/movies.png';
import Chat from '../Images/chat.png';
import Meetup from '../Images/meetup.png';
import Todo from '../Images/todo.png';
function Projects() {
  return (
    <div className="projects flex flex-wrap justify-center">
      <div className="flex justify-center w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <p>myFlix</p>
        <img className="w-60 h-60" src={Movies} alt="pokemon" />
      </div>
      <div className="w-96 h-10 bg-white"></div>
      <div className="flex flex-col  w-96 h-96 bg-gradient-to-tr from-pink-500 to-violet-500 m-3 rounded-lg">
        <p className="text-center mt-3 text-cyan-50 text-2xl">Pokemon</p>
        <img className="w-60 h-60 my-0 mx-auto" src={Pokemon} alt="pokemon" />
        <div className="text-center text-cyan-50 mb-11">
          <a href="" className="m-3 underline pointer hover:no-underline">
            Live App
          </a>
          <a href="" className="m-3 underline hover:no-underline">
            Code
          </a>
        </div>
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
    </div>
  );
}

export default Projects;
