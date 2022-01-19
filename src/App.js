import "./App.css";
import Contenu from "./Components/Contenu/contenu";
import ThemeContextProvider from "./Components/Context/ThemeContext";
import BtnToggle from "./Components/button-toggle/BtnToggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContextProvider>
          <BtnToggle />
          <Contenu />
        </ThemeContextProvider>
      </header>
    </div>
  );
}

export default App;
