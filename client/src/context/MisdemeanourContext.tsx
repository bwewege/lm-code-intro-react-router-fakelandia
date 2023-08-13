import { useState, useEffect, createContext } from "react";
import { fetchMisdemeanours } from "../hooks/fetchMisdemeanours";
import { Misdemeanour } from "../types/misdemeanours.types";

export const MisdemeanourContext = createContext<Misdemeanour[]>([]);

interface Props {
  children: React.ReactNode;
}

// FYI - In React 18 the FunctionComponent intergace has changed, PropsWithChildren has been removed
// this means the children prop needs to be included manually.

export const MisdemeanourProvider: React.FC<Props> = ({ children }) => {
  const [misdemeanourData, setMisdemeanourData] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    fetchMisdemeanours().then((data) => {
      console.log("Fetched misdemeanours:", data); // Debug line
      setMisdemeanourData(data);
    });
  }, []);

  return (
    <MisdemeanourContext.Provider value={misdemeanourData}>
      {children}
    </MisdemeanourContext.Provider>
  );
};
