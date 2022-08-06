function Nav() {
  return (
    <div>
      <nav class="flex justify-between py-4  bg-slate-100 space-x-5">
        <p class="left-0 ml-3 text-2xl text-black font-bold">Joel Saucedo</p>
        <div class="">
          <a
            href="/dashboard"
            class="font-medium px-3 py-2 text-slate-700 underline hover:bg-slate-100 hover:text-slate-900 hover:no-underline"
          >
            Home
          </a>
          <a
            href="/team"
            class="font-medium px-3 py-2 text-slate-700 underline hover:bg-slate-100 hover:text-slate-900 hover:no-underline"
          >
            Projects
          </a>
          <a
            href="/projects"
            class="font-medium px-3 py-2  text-slate-700 underline hover:bg-slate-100 hover:text-slate-900 hover:no-underline"
          >
            Contact
          </a>
          <a
            href="/reports"
            class="font-medium px-3 py-2  text-slate-700 underline hover:bg-slate-100 hover:text-slate-900 hover:no-underline"
          >
            Blog
          </a>
          <a
            href="/reports"
            class="font-medium px-3 py-2  text-slate-700 underline hover:bg-slate-100 hover:text-slate-900 hover:no-underline"
          >
            About
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
