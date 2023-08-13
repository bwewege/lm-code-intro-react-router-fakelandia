import { ConfessFormData } from "../types/confess.types";

const DisplayConfessForm: React.FC<{ form: ConfessFormData }> = ({ form }) => (
  <div>
    <p>
      It's very difficult to catch people committing misdemeanours so we
      appreciate it when citizens confess to us directly.
    </p>
    <p>
      However, if you're just having a hard day and need to vent then you're
      welcome to contact us here too. Up to you!
    </p>
    <div>
      Subject: <span>{form.subject}</span>
    </div>
    <div>
      Reason for contact: <span>{form.reason}</span>
    </div>
    <div>
      <span>{form.details}</span>
    </div>
  </div>
);

export default DisplayConfessForm;
