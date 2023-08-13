export type ConfessFormData = {
  subject: string;
  reason: string;
  details: string;
};

export type ConfessFormChangeHandler = <TKey extends keyof ConfessFormData>(
  value: ConfessFormData[TKey],
  name: TKey
) => void;
