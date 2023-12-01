export interface UserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  fatherEmail?: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  motherEmail?: string;
}

export interface LocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  email?: string;
}

export interface Student {
  id: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
}
