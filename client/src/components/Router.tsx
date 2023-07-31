import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misdemeanors from "./Misdemeanors";
import Confess from "./Confess";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";

const FakeLandiaRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="misdemeanors" element={<Misdemeanors />} />
      <Route path="confess" element={<Confess />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default FakeLandiaRouter;
