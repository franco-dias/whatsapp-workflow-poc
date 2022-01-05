import { Router } from 'express';
import { CreateWorkflowController } from 'modules/app/useCases/createWorkflow/CreateWorkflowController';

const router = Router();

const createWorkflowController = new CreateWorkflowController();

router.post('/', createWorkflowController.handle);

export default router;
