import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetWorkflowUseCase } from './GetWorkflowUseCase';

class GetWorkflowController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const getWorkflowUseCase = container.resolve(GetWorkflowUseCase);
    const response = await getWorkflowUseCase.execute(id);
    return res.status(200).json(response);
  }
}

export { GetWorkflowController };
