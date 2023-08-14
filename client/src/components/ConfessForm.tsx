import { useState, useContext } from "react";
import {
  ConfessFormData,
  ConfessFormChangeHandler,
} from "../types/confess.types";
import DisplayConfessForm from "./DisplayConfessForm";
import { TextInput } from "./inputs/TextInput";
import {
  validateSubject,
  validateReason,
  validateDetails,
} from "./validation/validate_confess_form";
import { MisdemeanourContext } from "../context/MisdemeanourContext";
import { SelectInput } from "./inputs/SelectInput";
import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";
import { useNavigate } from "react-router-dom";

const defaultFormData: ConfessFormData = {
  subject: "",
  reason: "",
  details: "",
};

const ConfessForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ConfessFormData>(defaultFormData);
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string[];
  }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler: ConfessFormChangeHandler = <
    TKey extends keyof ConfessFormData
  >(
    value: ConfessFormData[TKey],
    name: TKey
  ) => {
    setSubmitted(false);

    const newData: ConfessFormData = { ...formData };
    newData[name] = value;
    setFormData(newData);

    const newValidationErrors = { ...validationErrors };
    newValidationErrors[name] =
      name === "subject"
        ? validateSubject(value)
        : name === "reason"
        ? validateReason(value)
        : validateDetails(value);
    setValidationErrors(newValidationErrors);
  };

  const { addMisdemeanour } = useContext(MisdemeanourContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const url: string = "http://localhost:8080/api/confess";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: formData.subject,
          reason: formData.reason || "just-talk",
          details: formData.details,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.success && !data.justTalked) {
        const newMisdemeanour: Misdemeanour = {
          citizenId: data.citizenId,
          misdemeanour: formData.reason as MisdemeanourKind,
          date: new Date().toLocaleDateString(),
        };

        addMisdemeanour(newMisdemeanour);
        navigate("/misdemeanours");
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Enter a subject"
          label="Subject:"
          validate={validateSubject}
          onChangeHandler={onChangeHandler}
        />
        <hr />
        <SelectInput
          id="reason"
          name="reason"
          value={formData.reason ?? ""}
          label="Reason for contact:"
          validate={validateReason}
          onChangeHandler={onChangeHandler}
          options={[
            { value: "NOT_SELECTED", display: "-" },
            { value: "just-talk", display: "📢 I just want to talk" },
            { value: "rudeness", display: "🤪 Mild Public Rudeness" },
            { value: "lift", display: "🗣 Speaking in a Lift" },
            { value: "vegetables", display: "🥗 Not Eating Your Vegetables" },
            { value: "united", display: "😈 Supporting Manchester United" },
          ]}
        />
        <TextInput
          id="details"
          type="textarea"
          name="details"
          value={formData.details}
          placeholder="Enter the details"
          label="Details"
          validate={validateDetails}
          onChangeHandler={onChangeHandler}
        />
        <button type="submit" disabled={loading}>
          Confess
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {submitted && <DisplayConfessForm form={formData} />}
    </>
  );
};

export default ConfessForm;
