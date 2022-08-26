function Footer() {
  return (
    <div className="mt-20">
      <form className="max-w-lg my-0 p-3 mx-auto bg-purple-300 rounded-xl">
        <div className="my-0 mx-auto w-11/12">
          <label class="block">
            <span class="block text-sm  font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="w-full pl-3 h-10 rounded-md peer ..."
              placeholder="you@email.com"
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>

          <label className="block">Your message:</label>
          <textarea className="w-full px-3 h-40 rounded-md"></textarea>
          <button className="px-6 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
      <footer class="flex justify-between py-4 mt-11 mb-11">
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
      </footer>
    </div>
  );
}

export default Footer;
