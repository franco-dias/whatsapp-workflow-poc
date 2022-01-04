import 'reflect-metadata';
import '@shared/container';

import { app } from './app';

const run = async () => {
  await app.connections();
  app.setup();
  app.server.listen(3333, () =>
    console.log(`[APP] App listening on port ${3333}!`)
  );
};

run();
