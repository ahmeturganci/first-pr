export interface User {
  name: string;
}

export interface UserFormData {
  name: string;
}

export const createUser = (name: string): User => ({
  name: name.trim(),
});

export const validateUserName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

