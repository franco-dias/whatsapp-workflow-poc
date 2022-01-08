import { ICreateWorkflowDTO } from '../dtos/ICreateWorkflowDTO';
import { IMessage } from '../entities/IMessage';
import { IWorkflow } from '../entities/IWorkflow';

export interface IWorkflowsRepository {
  create(data: ICreateWorkflowDTO): Promise<IWorkflow>;
  getById(id: string): Promise<IWorkflow | undefined>;
  setMessages(workflow: IWorkflow, messages: IMessage[]): Promise<IWorkflow>;
}
