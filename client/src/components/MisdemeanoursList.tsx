import { Misdemeanour } from "../types/misdemeanours.types";

type MisdemeanoursListProps = {
  misdemeanours: Misdemeanour[];
};

const MisdemeanoursList: React.FC<MisdemeanoursListProps> = ({
  misdemeanours,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Misdemeanour</th>
          <th>Date</th>
          <th>Punishment</th>
        </tr>
      </thead>
      <tbody>
        {misdemeanours.map((misdemeanour, index) => (
          <tr key={index}>
            <td>{misdemeanour.citizenId}</td>
            <td>{misdemeanour.misdemeanour}</td>
            <td>{misdemeanour.date}</td>
            <td>
              <img
                src={`https://picsum.photos/100/100?random=${index}`}
                alt={`Punishement Image for Citizen ${misdemeanour.citizenId}`}
                width={100}
                height={100}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisdemeanoursList;
