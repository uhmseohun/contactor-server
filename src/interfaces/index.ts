import { ObjectId } from 'mongodb';

export interface User {
  _id: ObjectId,
  username: string;
  password: string;
  name: string;
  phone: string;
  address: {
    street: string;
    detail: string;
  };
  toJSON: Function;
};
