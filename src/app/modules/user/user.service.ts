import config from '../../config';
import { IStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: IStudent) => {
  console.log(studentData);
  // create a user object
  const userData: Partial<IUser> = {};

  // if password is not given, use default password
  userData.password = password || (config.defaultPass as string);
  console.log(userData);

  // set student role
  userData.role = 'student';

  // set manually generated id
  userData.id = '2024001';

  // create a user
  const newUser = await User.create(userData);
  console.log(newUser);

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser?.id;
    studentData.user = newUser?._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
