import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getsSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students is retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getsSingleStudent,
};
