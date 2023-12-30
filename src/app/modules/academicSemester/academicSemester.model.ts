import { Schema, model } from 'mongoose';
import { IAcademicSemester, TMonths } from './academicSemester.interface';

const MonthsSchema: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      enum: ['Autumn', 'Summer', 'Fall'],
      required: true,
    },
    code: {
      type: String,
      enum: ['01', '02', '03'],
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      enum: MonthsSchema,
      required: true,
    },
    endMonth: {
      type: String,
      enum: MonthsSchema,
      required: true,
    },
  },
  { timestamps: true },
);

export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
