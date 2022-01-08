import { WorkflowsRepository } from 'modules/workflow/infra/typeorm/repositories/WorkflowsRepository';
import { IWorkflowsRepository } from 'modules/workflow/repositories/IWorkflowsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IWorkflowsRepository>(
  'WorkflowsRepository',
  WorkflowsRepository
);
