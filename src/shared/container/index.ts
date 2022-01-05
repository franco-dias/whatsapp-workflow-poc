import { WorkflowsRepository } from 'modules/app/infra/typeorm/repositories/WorkflowsRepository';
import { IWorkflowsRepository } from 'modules/app/repositories/IWorkflowsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IWorkflowsRepository>(
  'WorkflowsRepository',
  WorkflowsRepository
);
