import { Misdemeanour } from "../types/misdemeanours.types";

type MisdemeanoursListProps = {
  misdemeanours: Misdemeanour[];
};

const MisdemeanoursList: React.FC<MisdemeanoursListProps> = ({
  misdemeanours,
}) => {
  const getLongName = (misdemeanourType: string) => {
    switch (misdemeanourType) {
      case "rudeness":
        return "🤪 Mild Public Rudeness";
      case "lift":
        return "🗣 Speaking in a Lift";
      case "vegetables":
        return "🥗 Not Eating Your Vegetables";
      case "united":
        return "😈 Supporting Manchester United";
      default:
        return misdemeanourType;
    }
  };

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
            <td>{getLongName(misdemeanour.misdemeanour)}</td>
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
