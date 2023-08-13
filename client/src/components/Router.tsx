import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misdemeanours from "./Misdemeanours";
import Confess from "./Confess";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import { MisdemeanourProvider } from "../context/MisdemeanourContext";

const FakeLandiaRouter: React.FC = () => (
  <MisdemeanourProvider>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route
          path="misdemeanours"
          element={
            <MisdemeanourProvider>
              <Misdemeanours />
            </MisdemeanourProvider>
          }
        />

        <Route path="confess" element={<Confess />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </MisdemeanourProvider>
);

export default FakeLandiaRouter;
