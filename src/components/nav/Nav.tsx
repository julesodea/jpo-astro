import ThemeToggle from '../theme/ThemeToggle';

export default function Nav() {
  return (
    <nav className="fixed w-full shadow-sm mx-auto bg-neutral-50 dark:bg-neutral-900 bg-opacity-10 dark:bg-opacity-10 backdrop-blur-sm z-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center p-4">
          <a className="font-bold" href="/">
            JULES O'DEA
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
