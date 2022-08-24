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
      background: 'bg-sky-300',
      url: '/pokemon',
    },
    Budget: {
      projectImg: Budget,
      projectName: 'Budget Calculator',
      projectDescription: 'This is a test for budget calculator project',
      background: 'bg-green-200',
      url: '/budget',
    },
    Movies: {
      projectImg: Movies,
      projectName: 'Movies',
      projectDescription: 'This is a test for movies calculator project',
      background: 'bg-orange-200',
      url: '/movies',
    },
    Meetup: {
      projectImg: Meetup,
      projectName: 'Meetup',
      projectDescription: 'This is a test for meetup calculator project',
      background: 'bg-purple-300',
      url: '/meetup',
    },
  };
  return (
    <div className="flex justify-around flex-wrap">
      <Project project={myProjects.Budget} url={myProjects.Budget.url} />
      <Project project={myProjects.Pokemon} url={myProjects.Pokemon.url} />
      <Project project={myProjects.Movies} url={myProjects.Movies.url} />
      <Project project={myProjects.Meetup} url={myProjects.Meetup.url} />
    </div>
  );
}

export default Projects;
