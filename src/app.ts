import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

// default routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Dev!');
});

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
