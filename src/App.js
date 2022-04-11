import "./App.css";
import About from "./Components/About/About";
import Nav from "./Components/Nav/Nav";
import Resume from "./Components/Resume/Resume";
import ResumeProjects from "./Components/Projects/Projexts.jsx";

function App() {
  return (
    <div className="app">
      <About />
      <Nav />
      <Resume />
      <ResumeProjects />
    </div>
  );
}

export default App;
