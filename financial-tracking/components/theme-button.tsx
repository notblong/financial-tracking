import { useState } from "react";
import Image from "next/image";
import LightMode from "../assets/light-mode.png";
import DarkMode from "../assets/dark-mode.png";

export default function ThemeButton() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme != 'dark' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <>
      <button onClick={toggleTheme} className={`bg-gray-100 hover:bg-gray-200 p-2 border border-transparent rounded-full text-black`}>
        {theme == 'light' && <Image src={LightMode} alt={"Light mode"} width={20} />}
        {theme == 'dark' && <Image src={DarkMode} alt={"Dark mode"} width={20} />}
      </button>
    </>
  )
}