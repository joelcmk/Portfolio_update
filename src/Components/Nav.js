function Nav() {
  return (
    <div>
      <nav class="flex dark:bg-slate-800 justify-center space-x-4">
        <a
          href="/dashboard"
          class="font-medium px-3 py-2 dark:text-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/team"
          class="font-medium px-3 py-2 dark:text-white text-slate-700  hover:bg-slate-100 hover:text-slate-900"
        >
          Projects
        </a>
        <a
          href="/projects"
          class="font-medium px-3 py-2 dark:text-white text-slate-700  hover:bg-slate-100 hover:text-slate-900"
        >
          Contact
        </a>
        <a
          href="/reports"
          class="font-medium px-3 py-2 dark:text-white text-slate-700  hover:bg-slate-100 hover:text-slate-900"
        >
          Blog
        </a>
        <a
          href="/reports"
          class="font-medium px-3 py-2 dark:text-white text-slate-700  hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
        <a class="font-medium px-3 py-2 dark:text-white hover:bg-slate-100">
          dark
        </a>
      </nav>
    </div>
  );
}

export default Nav;
