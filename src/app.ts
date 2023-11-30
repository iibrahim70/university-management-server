import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Dev!');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found',
  });
});

// global error handler
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   if (error) {
//     res.status(400).json({
//       success: false,
//       message: "Something went wrong",
//     });
//   }
// });

export default app;
