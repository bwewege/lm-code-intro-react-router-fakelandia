export type ConfessFormData = {
  subject: string;
  reason: string;
  details: string;
};

export type ConfessFormChangeHandler = <TKey extends keyof ConfessFormData>(
  value: ConfessFormData[TKey],
  name: TKey
) => void;

export type Reason =
  | "🤪 Mild Public Rudeness"
  | "🗣 Speaking in a Lift"
  | "🥗 Not Eating Your Vegetables"
  | "😈 Supporting Manchester United"
  | "📢 I just want to talk";
