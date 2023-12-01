import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoutes);

// default routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Dev!');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found',
  });
});

export default app;
