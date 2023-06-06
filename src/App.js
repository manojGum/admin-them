import logo from './logo.svg';
import './App.css';
import Navigation from './Components/NavigationTemplete/Navigation';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';

function App() {
  const [DarkTheme, setDarkTheme] = useState(true)
  return (
    <ThemeContext.Provider value={{DarkTheme, setDarkTheme}} >
    <div className="App">
    <Navigation />
    {/* <Main /> */}
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
