import { Request, Response } from 'express';
import { createStudentIntoDB } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createStudent };
