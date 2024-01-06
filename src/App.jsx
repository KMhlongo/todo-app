import './App.css'
import IconSun from './assets/icon-sun.svg';
import IconMoon from './assets/icon-moon.svg';
import { useEffect, useState } from 'react';
import Tasks from './Tasks';

function App() {

  const [theme, setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    let mode = window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
    return mode;
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  function handleClick() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <div className='heading'>
        <h1>TODO</h1>
        <img src={theme === 'dark' ? IconSun : IconMoon} className='icon'
              alt={theme === 'dark' ? "sun" : "moon"} onClick={handleClick}/>
      </div>
      <Tasks/>
    </>
  )
}

export default App
