import { Misdemeanour } from "../types/misdemeanours.types";

type MisdemeanoursListProps = {
  misdemeanours: Misdemeanour[];
  filter: string;
  setFilter: (filter: string) => void;
};

const MisdemeanoursList: React.FC<MisdemeanoursListProps> = ({
  misdemeanours,
  filter,
  setFilter,
}) => {
  const uniqueMisdemeanours = [
    ...new Set(misdemeanours.map((m) => m.misdemeanour)),
  ];

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
          <th>
            Misdemeanour{" "}
            <div>
              {" "}
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              >
                <option value="">All</option>
                {uniqueMisdemeanours.map((misdemeanour, index) => (
                  <option key={index} value={misdemeanour}>
                    {misdemeanour}
                  </option>
                ))}
              </select>
            </div>
          </th>
          <th>Date</th>
          <th>Punishment</th>
        </tr>
      </thead>
      <tbody>
        {misdemeanours.map((misdemeanour, index) => (
          <tr key={index}>
            <td>{misdemeanour.citizenId || "XXXX"}</td>
            <td>{misdemeanour.date}</td>
            <td>{getLongName(misdemeanour.misdemeanour)}</td>

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
