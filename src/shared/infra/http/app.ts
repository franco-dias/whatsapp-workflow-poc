import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';

import { AppError } from '@shared/errors/AppError';

import { database } from '../typeorm';
import errorHandler from './middlewares/errorHandler';
import routes from './routes/v2';

export class App {
  server: Express;

  setup() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  async connections() {
    try {
      await database.connect();
    } catch (err) {
      this.exit('[APP] Error setting up!', err);
    }
  }

  middlewares() {
    this.server.set('trust proxy', true);
    this.server.use(express.json());
    this.server.use(cors({ credentials: true, origin: '*' }));
  }

  routes() {
    this.server.use('/hermes/v1', routes);
    this.server.all('*', async (req) => {
      console.log(`[APP] Request Not Found: ${req.method} - ${req.url}`);
      throw new AppError('Not found', 404);
    });
    this.server.use(errorHandler);
  }

  exit(message: string, error: unknown) {
    console.error(message, '\n', error);
    process.exit(1);
  }
}

const app = new App();

export { app };
