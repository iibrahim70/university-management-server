/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
import { studentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', UserRoutes);

// default routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Dev!');
});

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
