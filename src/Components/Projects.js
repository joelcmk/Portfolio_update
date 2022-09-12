import Clock from '../Images/clock.png';
import Food from '../Images/food.png';
import Devlaunchers from '../Images/devlaunchers.png';
import Budget from '../Images/budget.png';
import Project from './Project';
import NextProject from './NextProject';
function Projects() {
  const myProjects = {
    Pomodoro: {
      projectImg: Clock,
      projectName: 'Pomodoro',
      projectDescription:
        'Pomodoro will help you to organize your time, so you can be productive and have free time to rest or play video games. ',
      background: 'bg-orange-200',
      url: 'https://github.com/joelcmk/Pomodoro',
      liveAppUrl: 'https://joelcmk.github.io/Pomodoro',
      css: 'w-80 h-80',
    },
    Budget: {
      projectImg: Budget,
      projectName: 'LoveDinero',
      projectDescription:
        'LoveDinero was made with love, it is a personal finance web application that will help you to stay on budget and attain your financial goals. Cancun here we go!',
      background: 'bg-green-200',
      url: 'https://github.com/joelcmk/budget-calculator',
      liveAppUrl: 'https://joelcmk.github.io/budget-calculator',
      css: 'w-96 h-80',
    },
    Recipify: {
      projectImg: Food,
      projectName: 'Recipefy',
      projectDescription:
        "Recipefy is a web app that will help you find thousands of food recipes. Relive old memories  cooking plates from your childhood or go wild and cook something that you've never had before. ",
      background: 'bg-sky-300',
      url: 'https://github.com/joelcmk/Recipefy',
      liveAppUrl: 'https://joelcmk.github.io/Recipefy',
      css: 'w-80  h-80',
    },
    Meetup: {
      projectImg: Devlaunchers,
      projectName: 'Dev Launchers',
      projectDescription:
        'Find out the work that I did volunteering as a Full-stack Developer at Devlaunchers.',
      background: 'bg-purple-300',
      url: 'https://github.com/dev-launchers/platform__dl-ideas',
      liveAppUrl: 'https://idea.devlaunchers.com',
      css: 'w-full h-80 rounded-md',
    },
  };
  return (
    <div className="flex justify-around flex-wrap">
      <div className="flex flex-col justify-center flex-wrap mt-20 w-11/12">
        <h3 className="text-5xl font-semibold">My Work</h3>
        <p className=" text-xl my-10  ">
          I've been busy working on personal projects and volunteering for a
          no-profit. Here are some of my latest projects, for a detailed
          breakdown click on "view project" to find more information.
        </p>
      </div>
      <Project
        project={myProjects.Budget}
        url={myProjects.Budget.url}
        css={myProjects.Budget.css}
        liveAppUrl={myProjects.Budget.liveAppUrl}
      />
      <Project
        project={myProjects.Pomodoro}
        url={myProjects.Pomodoro.url}
        css={myProjects.Pomodoro.css}
        liveAppUrl={myProjects.Pomodoro.liveAppUrl}
      />
      <Project
        project={myProjects.Recipify}
        url={myProjects.Recipify.url}
        css={myProjects.Recipify.css}
        liveAppUrl={myProjects.Recipify.liveAppUrl}
      />
      <Project
        project={myProjects.Meetup}
        url={myProjects.Meetup.url}
        css={myProjects.Meetup.css}
        liveAppUrl={myProjects.Meetup.liveAppUrl}
      />
      <NextProject />
    </div>
  );
}

export default Projects;
