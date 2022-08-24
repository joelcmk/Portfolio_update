function Nav() {
  return (
    <div>
      <nav class="flex justify-between py-4 mb-11">
        <a class="left-0 ml-3 text-2xl text-black font-bold" href="/">
          Joel Saucedo
        </a>
        <div className="flex text-blue-500 font-semibold">
          <a href="https://www.linkedin.com/in/j-saucedo/" className="mx-5">
            Linkedin
          </a>
          <a href="https://github.com/joelcmk" className="mx-5">
            Github
          </a>
          <a href="#" className="mx-5">
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
