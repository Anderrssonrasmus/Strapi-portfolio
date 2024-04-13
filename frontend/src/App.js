import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Page layout
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GsapTest from "./pages/GsapTest";

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
          <Route exact path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/gsap" element={<GsapTest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
