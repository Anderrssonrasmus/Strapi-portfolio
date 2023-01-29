import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Page layout
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<SingleProject />} />
      </Routes>
    </div>
  );
}

export default App;
