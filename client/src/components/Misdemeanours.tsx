import { useState, useContext } from "react";
import { MisdemeanourContext } from "../context/MisdemeanourContext";
import MisdemeanoursList from "./MisdemeanoursList";

const Misdemeanours: React.FC = () => {
  const allMisdemeanours = useContext(MisdemeanourContext);
  const [filter, setFilter] = useState("");

  const misdemeanoursToDisplay = filter
    ? allMisdemeanours.filter((m) => m.misdemeanour === filter)
    : allMisdemeanours;

  const uniqueMisdemeanours = [
    ...new Set(allMisdemeanours.map((m) => m.misdemeanour)),
  ];

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        {uniqueMisdemeanours.map((misdemeanour, index) => (
          <option key={index} value={misdemeanour}>
            {misdemeanour}
          </option>
        ))}
      </select>

      <MisdemeanoursList misdemeanours={misdemeanoursToDisplay} />
    </div>
  );
};

export default Misdemeanours;
