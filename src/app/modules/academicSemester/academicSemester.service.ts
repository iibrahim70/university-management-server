import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterNameAndCodeMapper } from './academicSemester.constant';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: IAcademicSemester) => {
  // academic semester name and code checking
  if (academicSemesterNameAndCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code!');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
