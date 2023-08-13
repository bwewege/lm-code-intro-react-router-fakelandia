import { Misdemeanour } from "../types/misdemeanours.types";

const url: string = "http://localhost:8080/api/misdemeanours/5";

export const fetchMisdemeanours = async (): Promise<Misdemeanour[]> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching misdemeanour data:", error);
    return [];
  }
};
