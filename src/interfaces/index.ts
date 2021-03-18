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

export interface VaccineCenter {
  address: string;
  centerName: string;
  centerType: string;
  facilityName: string;
  id: number;
  lat: number;
  lng: number;
  org: string;
  sido: string;
  sigungu: string;
  zipCode: string;
};

export interface Coordinate {
  lat: number;
  lng: number;
};
