import { useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(theme != 'dark' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <>
      <button onClick={toggleTheme} className={`bg-gray-100 hover:bg-gray-200 p-2 border border-transparent rounded-full text-black`}>
        {theme == 'light' && '⽇🌞'}
        {theme == 'dark' && '⽉🌚'}
        {(theme != 'light' && theme != 'dark') && '⽉🌓⽇'}
      </button>
    </>
  )
}