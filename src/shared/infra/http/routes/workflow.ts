import { Router } from 'express';
import { CreateWorkflowController } from 'modules/workflow/useCases/createWorkflow/CreateWorkflowController';
import { GetWorkflowController } from 'modules/workflow/useCases/getWorkflow/GetWorkflowController';

const router = Router();

const createWorkflowController = new CreateWorkflowController();
const getWorkflowController = new GetWorkflowController();

router.get('/:id', getWorkflowController.handle);
router.post('/', createWorkflowController.handle);

export default router;
