import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Page layout
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import About from "./pages/About";
import { motion as m } from "framer-motion"

function App() {

  window.onload = () => {
    const sidebar = document.querySelector(".sidebar");
    const root = document.querySelector(':root');

    // set css variable
    root.style.setProperty('--sidebar-width', sidebar.offsetWidth);
    document.documentElement.style.setProperty('--sidebar-width', sidebar.offsetWidth + "px");
    console.log(sidebar.offsetWidth);
  }

  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
