import { Types } from 'mongoose';

export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  fatherEmail?: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  motherEmail?: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  email?: string;
}

export interface IStudent {
  id: string;
  user: Types.ObjectId;
  name: IUserName;
  password: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
}
