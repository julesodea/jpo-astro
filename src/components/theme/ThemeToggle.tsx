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

  return (
    <button
      className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center"
      onClick={toggleTheme}
      title={theme === "dark" ? "Toggle to Light Mode" : "Toggle to Dark Mode"}
    >
      {theme === "dark" ? "⚡️" : "☀"}
    </button>
  );
}

export default ThemeToggle;
