import { MisdemeanourKind } from "./misdemeanours.types";

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
  | "NOT_SELECTED"
  | "rudeness"
  | "lift"
  | "vegetables"
  | "united"
  | "just-talk";
