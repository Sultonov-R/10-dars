import Navbar from "./components/Navbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "./components/Button";
import Project from "./components/Project";
import VisionInfo from "./components/VisionInfo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <div className="create-project">
          <div className="left-top">
            <KeyboardArrowLeftIcon />
            <span>Yangi loyiha ochish</span>
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div className="projects-info">
          <Project />
          <VisionInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
