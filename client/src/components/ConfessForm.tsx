import { ConfessFormData } from "../types/confess.types";
import DisplayConfessForm from "./DisplayConfessForm";

const defaultFormData: ConfessFormData = {
  subject: "",
  reason: "",
  details: "",
};

const ConfessForm = () => {
  return (
    <>
      <form>
        <TextInput
          id="speciesName"
          type="text"
          name="speciesName"
          value={formData.speciesName}
          placeholder="Enter Species Name"
          label="Species Name"
          // 💡 Be sure to check out the validation code to understand how this works!
          validate={validateSpeciesName}
          onChangeHandler={onChangeHandler}
        />
        <hr />
        <TextInput
          id="planetName"
          type="text"
          name="planetName"
          value={formData.planetName}
          placeholder="Enter Planet Name"
          label="Planet Name"
          validate={validatePlanetName}
          onChangeHandler={onChangeHandler}
        />
        <hr />
        <TextInput
          id="numberOfBeings"
          type="text"
          name="numberOfBeings"
          value={(formData.numberOfBeings ?? "").toString()}
          placeholder="Enter Number of Beings"
          label="Number of Beings"
          validate={validateNumberOfBeings}
          onChangeHandler={onChangeHandler}
        />
        <hr />
        <SelectInput
          id="twoPlusTwo"
          name="twoPlusTwo"
          value={formData.twoPlusTwo ?? ""}
          label="What is 2+2?"
          validate={validateTwoPlusTwo}
          onChangeHandler={onChangeHandler}
          options={[
            { value: "NOT_SELECTED", display: "-" },
            { value: "4", display: "4" },
            { value: "Not 4", display: "Not 4" },
          ]}
        />
        <hr />
        <TextInput
          id="reasonForSparing"
          type="textarea"
          name="reasonForSparing"
          value={formData.reasonForSparing}
          placeholder="Enter Reason for Sparing"
          label="Reason for Sparing"
          validate={validateReasonForSparing}
          onChangeHandler={onChangeHandler}
        />
        <hr />
        <button type="submit">Submit</button>
        <hr />
      </form>
      {submitted && <DisplayW12Form form={formData} />}
    </>
  );
};

export default ConfessForm;
