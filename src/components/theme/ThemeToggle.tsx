import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    updateThemeClass(storedTheme);
  }, []);

  const updateThemeClass = (newTheme: string) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeClass(newTheme);
  };

  const iconClass = "w-5 h-5 shrink-0 block text-neutral-700 dark:text-neutral-200";

  return (
    <button
      className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity p-0"
      onClick={toggleTheme}
      title={theme === "dark" ? "Toggle to Light Mode" : "Toggle to Dark Mode"}
    >
      {theme === "dark" ? (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2 L6 11 h4 l-2 9 l8-11 h-4 l2-6 l-2-1 z" />
        </svg>
      ) : (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
