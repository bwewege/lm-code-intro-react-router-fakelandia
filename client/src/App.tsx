import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import FakeLandiaRouter from "./components/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <FakeLandiaRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
