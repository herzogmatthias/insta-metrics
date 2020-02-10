export const ON_PASSWORD_CHANGE = "ON_PASSWORD_CHANGE";
export const PASSWORD_IS_INVALID = "PASSWORD_IS_INVALID";

export interface LoginState {
  error: string;
  hasError: boolean;
  password: string;
}

export interface PasswordError {
  error: string;
  hasError: boolean;
}
