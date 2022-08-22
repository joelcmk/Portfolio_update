import '../App.css';
import Flag from '../Images/flag.png';
import Portrait from '../Images/portrait.jpeg';
function Header() {
  return (
    <div className="flex justify-center items-center mb-20">
      <img
        className="h-60 w-60 rounded-full shadow-md"
        src={Portrait}
        alt="portrait"
      />
      <div className="ml-6 text-6xl font-semibold ">
        <p className="flex items-end ">
          Hi there, I’m Joel.
          <img className="h-10 mb-2 ml-2" src={Flag} alt="flag" />
        </p>

        <p>
          Front End <span className="text-blue-500">Developer</span>, &#128187;
        </p>
        <p>Student, cat dad and taco lover.&#127790;</p>
      </div>
    </div>
  );
}

export default Header;
