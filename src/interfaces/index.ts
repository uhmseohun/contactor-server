export interface User {
  username: string;
  password: string;
  name: string;
  phone: string;
  address: {
    street: string;
    detail: string;
  };
};
