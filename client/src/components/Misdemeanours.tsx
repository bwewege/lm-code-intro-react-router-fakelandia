import { useEffect, useState } from "react";
import { fetchMisdemeanours } from "../utils/fakelandiaAPI";
import { Misdemeanour } from "../types/misdemeanours.types";

const Misdemeanours: React.FC = () => {
  const [misdemeanourData, setMisdemeanourData] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMisdemeanours();
      setMisdemeanourData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Misdemeanour Details</h1>
      {misdemeanourData.length > 0 ? (
        <ul>
          {misdemeanourData.map((misdemeanour, index) => (
            <li key={index}>
              <p>Citizen ID: {misdemeanour.citizenId}</p>
              <p>Misdemeanour: {misdemeanour.misdemeanour}</p>
              <p>Date: {misdemeanour.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Misdemeanours;
