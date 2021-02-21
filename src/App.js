import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import moviesRequests from "./utils/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(
    moviesRequests.fecthTrending
  );

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
