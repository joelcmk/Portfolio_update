import '../App.css';
import Flag from '../Images/flag.png';
import Portrait from '../Images/portrait.jpeg';
function Header() {
  return (
    <div className="mb-10 ">
      <div className="flex justify-center flex-col items-center mb-20 w-11/12 lg:flex-row">
        <img
          className="h-60 w-60 rounded-full shadow-md"
          src={Portrait}
          alt="portrait"
        />
        <div className="ml-6 text-3xl font-semibold md:text-6xl lg:text-6xl">
          <p className="flex items-end ">
            Hi there, I’m Joel.
            <img
              className="h-6 mb-2 ml-2 md:h-10 lg:h-10"
              src={Flag}
              alt="flag"
            />
          </p>
          <p>
            Front End <span className="text-blue-500">Developer</span>,
            &#128187;
          </p>
          <p>Student, cat dad and taco lover.&#127790;</p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap mt-20 ">
        <p className="text-base font-normal m-3 md:w-2/5 lg:w-2/5 ">
          I’m a front-end web developer based in Austin, TX. I have extensive
          experience in customer service, the importance of small details,
          accuracy, and quality control. Qualities that are indispensable in the
          tech industry.
          <br />
          <br />I moved to the US when I was 18 years old. I learned how to
          adapt to a constantly changing environment and culture that encouraged
          me to be more creative.
          <br />
          <br />I have always admired the tech scene because it enhances us to
          do better. Namely, one of my favorite aspects of the tech scene is
          learning new tools, libraries, and applications.
        </p>
        <p className="m-3 md:w-2/5 lg:w-2/5">
          My specialities include: HTML, CSS, JavaScript and React. In other
          words, It’s an endless process where I always learn and adapt. One of
          my dreams is to work for a company that helps the community and allows
          me to grow as a person and professional. I’m available to work in
          Austin, TX.
        </p>
      </div>
      <div className="my-0 mx-auto mt-20 w-11/12">
        <h2 className="text-5xl font-semibold">My Skills</h2>
        <p className="my-10 text-xl">
          I've gained some experience in the following skills through courses,
          books, articles, tutorials, volunteering, and mentors.{' '}
        </p>
        <div className="flex justify-around list-inside list-disc ">
          <ul>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              JavaScript
            </li>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              React
            </li>
          </ul>
          <ul>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              HTML
            </li>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              CSS
            </li>
          </ul>
          <ul>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              Git
            </li>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              Tailwind
            </li>
          </ul>
          <ul>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              Firebase
            </li>
            <li className="flex items-center h4">
              <div className="flex w-3 h-3 mr-1 bg-blue-500 rounded-full"></div>
              Strapi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
