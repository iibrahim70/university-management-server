import express from 'express';
import { createStudent } from './student.controller';

const studentRouter = express.Router();

studentRouter.post('/create-student', createStudent);
