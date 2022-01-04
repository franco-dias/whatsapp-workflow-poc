import { ICreateWorkflowDTO } from '../dtos/ICreateWorkflowDTO';
import { IWorkflow } from '../entities/IWorkflow';

export interface IWorkflowsRepository {
  create(data: ICreateWorkflowDTO): Promise<IWorkflow>;
}
