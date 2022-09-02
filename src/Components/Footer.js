import Resume from '../Images/Saucedo-Joel-Resume.pdf';
function Footer() {
  return (
    <div className="">
      <footer class="flex justify-between py-4 mt-11 mb-11">
        <a class="left-0 ml-3 text-2xl text-black font-bold" href="/">
          Joel Saucedo
        </a>
        <div className="flex text-blue-500 font-semibold">
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
      </footer>
    </div>
  );
}

export default Footer;
