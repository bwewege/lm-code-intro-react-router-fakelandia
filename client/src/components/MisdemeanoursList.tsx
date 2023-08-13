import { Misdemeanour } from "../types/misdemeanours.types";

type MisdemeanoursListProps = {
  misdemeanours: Misdemeanour[];
};

const MisdemeanoursList: React.FC<MisdemeanoursListProps> = ({
  misdemeanours,
}) => {
  return (
    <ul>
      {misdemeanours.map((misdemeanour, index) => (
        <li key={index}>
          <p>Citizen ID: {misdemeanour.citizenId}</p>
          <p>Misdemeanour: {misdemeanour.misdemeanour}</p>
          <p>Date: {misdemeanour.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default MisdemeanoursList;
