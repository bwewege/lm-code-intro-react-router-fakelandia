import { useState } from "react";
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

const defaultFormData: ConfessFormData = {
  subject: "",
  reason: "",
  details: "",
};

const ConfessForm = () => {
  const [formData, setFormData] = useState<ConfessFormData>(defaultFormData);
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string[];
  }>({});

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

  return (
    <>
      <form>
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
        <TextInput
          id="reason"
          type="text"
          name="reason"
          value={formData.reason}
          placeholder="Select a reason"
          label="Reason for contact:"
          validate={validateReason}
          onChangeHandler={onChangeHandler}
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
        <hr />
        <button type="submit">Confess</button>
        <hr />
      </form>
      {submitted && <DisplayConfessForm form={formData} />}
    </>
  );
};

export default ConfessForm;
