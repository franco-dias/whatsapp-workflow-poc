import { Router } from 'express';

import workflowRouter from './workflow';

const appRouter = Router();

appRouter.use('/workflow', workflowRouter);

export default appRouter;
