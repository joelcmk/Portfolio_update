import Resume from '../Images/Saucedo-Joel-Resume.pdf';
function Nav() {
  return (
    <div>
      <nav class="flex flex-col justify-between py-4 mb-11 md:flex-row lg:flex-row">
        <a
          class="my-0 mx-auto text-2xl text-black font-bold md:left-0 md:ml-3 lg:left-0 lg:ml-3"
          href="/"
        >
          Joel Saucedo
        </a>
        <div className="flex justify-center text-blue-500 font-semibold ">
          <a
            href="https://www.linkedin.com/in/j-saucedo/"
            target="_blank"
            className="mx-5"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/joelcmk"
            target="_blank"
            className="mx-5"
            rel="noreferrer"
          >
            Github
          </a>
          <a href={Resume} target="_blank" className="mx-5" rel="noreferrer">
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
