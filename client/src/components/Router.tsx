import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misdemeanours from "./Misdemeanours";
import ConfessForm from "./ConfessForm";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import { MisdemeanourProvider } from "../context/MisdemeanourContext";
import { ConfessFormData } from "../types/confess.types";

const yourConfessFormData: ConfessFormData = {
  subject: "",
  reason: "",
  details: "",
};

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

        <Route
          path="confess"
          element={<ConfessForm form={yourConfessFormData} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </MisdemeanourProvider>
);

export default FakeLandiaRouter;
