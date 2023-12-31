import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { createAcademicSemesterValidationScema } from './academicSemester.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(createAcademicSemesterValidationScema),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
