import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container';

import { App } from './app';

const run = async () => {
  const app = new App();
  await app.connections();
  app.setup();
  app.server.listen(3333, () =>
    console.log(`[APP] App listening on port ${3333}!`)
  );
};

run();
