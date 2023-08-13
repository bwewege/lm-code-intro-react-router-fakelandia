import {
  SUBJECT_MAX_LENGTH,
  SUBJECT_MIN_LENGTH,
  REASON_MAX_LENGTH,
  REASON_MIN_LENGTH,
  DETAILS_MAX_LENGTH,
  DETAILS_MIN_LENGTH,
} from "./validation_constants";
import {
  maxLength,
  minLength,
  mustNotBeNull,
  ValidationFunction,
} from "./validation_rules";

export const validateSubject: (value: string) => string[] = (value) => {
  const rules = [
    minLength(SUBJECT_MIN_LENGTH),
    maxLength(SUBJECT_MAX_LENGTH),
    mustNotBeNull(),
  ];

  return apply(rules, value);
};

export const validateReason: (value: string) => string[] = (value) => {
  const rules = [
    minLength(REASON_MIN_LENGTH),
    maxLength(REASON_MAX_LENGTH),
    mustNotBeNull(),
  ];

  return apply(rules, value);
};

export const validateDetails: (value: string) => string[] = (value) => {
  const rules = [
    minLength(DETAILS_MIN_LENGTH),
    maxLength(DETAILS_MAX_LENGTH),
    mustNotBeNull(),
  ];

  return apply(rules, value);
};

const apply = (rules: ValidationFunction[], value: string) => {
  return rules.map((r) => r(value)).filter(Boolean) as string[];
};
