import Pokemon from '../Images/pokemon.png';
import Movies from '../Images/movies.png';
import Chat from '../Images/chat.png';
import Meetup from '../Images/meetup.png';
import Todo from '../Images/todo.png';
import Budget from '../Images/budget.png';
import Project from './Project';
function Projects() {
  const myProjects = {
    Pokemon: {
      projectImg: Pokemon,
      projectName: 'Pokemon',
      projectDescription: 'This is a test',
      background: 'bg-gradient-to-tr from-rose-300 to-teal-400',
    },
    Budget: {
      projectImg: Budget,
      projectName: 'Budget Calculator',
      projectDescription: 'This is a test for budget calculator project',
      background: 'bg-green-200',
    },
    Movies: {
      projectImg: Movies,
      projectName: 'Movies',
      projectDescription: 'This is a test for movies calculator project',
      background: 'bg-orange-200',
    },
    Meetup: {
      projectImg: Meetup,
      projectName: 'Meetup',
      projectDescription: 'This is a test for meetup calculator project',
    },
  };
  return (
    <div className="flex justify-around flex-wrap">
      <Project project={myProjects.Budget} />
      <Project project={myProjects.Pokemon} />
      <Project project={myProjects.Movies} />
      <Project project={myProjects.Meetup} />
    </div>
  );
}

export default Projects;
