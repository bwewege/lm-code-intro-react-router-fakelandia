import { BrowserRouter } from "react-router-dom";
import FakeLandiaRouter from "./components/Router";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <FakeLandiaRouter />
      </BrowserRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
