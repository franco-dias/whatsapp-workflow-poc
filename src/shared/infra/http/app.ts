import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express, { Express } from 'express';
import 'express-async-errors';
import { resolve } from 'path';

import { errorHandler, NotFoundError } from '@imobo/nano-common';

import { database } from '../typeorm';
import routes from './routes/v2';

export class App {
  server: Express;

  constructor() {
    this.environment();
  }

  setup() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  environment() {
    config({ path: resolve(__dirname, '..', '..', '..', '..', '.env.local') });
    config({ path: resolve(__dirname, '..', '..', '..', '..', '.env') });
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
    this.server.use(cookieParser());
    this.server.use(cors({ credentials: true, origin: '*' }));
  }

  routes() {
    this.server.use(
      '/auth/doc',
      express.static(resolve(__dirname, '..', '..', '..', 'swagger'))
    );

    this.server.use('/auth/v1', routes);
    this.server.all('*', async (req) => {
      console.log(`[APP] Request Not Found: ${req.method} - ${req.url}`);
      throw new NotFoundError();
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
