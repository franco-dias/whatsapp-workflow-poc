import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateWorkflowUseCase } from './CreateWorkflowUseCase';

class CreateWorkflowController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { workflow } = req.body;
    const createWorkflowUseCase = container.resolve(CreateWorkflowUseCase);
    const response = await createWorkflowUseCase.execute(workflow);

    return res.status(201).json(response);
  }
}

export { CreateWorkflowController };
