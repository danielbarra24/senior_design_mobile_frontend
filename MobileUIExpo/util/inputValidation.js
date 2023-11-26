export const InputErrorMessage = Object.freeze({
  INVALID_PASSWORD: "Invalid password",
  MALFORMED_PASSWORD:
    'Password must have 6-61 characters and can only use special characters "!?$%^*)(+=._-"',
  INVALID_EMAIL: "Invalid email address",
  INVALID_NAME: "Invalid name",
  EMAIL_ALREADY_EXISTS: "Email already exists",
  PASSWORD_MISMATCH: "Passwords do not match",
  MISSING_INPUT: "Required field(s) missing",
  GENERAL: "Something went wrong",
});

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const passwordRegex = /^[a-zA-Z0-9!?$%^*)(+=._-]{6,61}$/;
export const nameRegex = /^[a-z ,.'-]+/i;
