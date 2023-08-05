import { BrowserRouter } from "react-router-dom";
import FakeLandiaRouter from "./components/Router";
import "./styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <FakeLandiaRouter />
      </BrowserRouter>
      <div className="App">
        <h1>What is Lorem Ipsum? </h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </h2>
      </div>
    </>
  );
}

export default App;
