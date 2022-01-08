import { ICreateWorkflowDTO } from 'modules/workflow/dtos/ICreateWorkflowDTO';
import { IMessage } from 'modules/workflow/entities/IMessage';
import { IWorkflow } from 'modules/workflow/entities/IWorkflow';
import { IWorkflowsRepository } from 'modules/workflow/repositories/IWorkflowsRepository';
import { getRepository, Repository } from 'typeorm';

import { Workflow } from '../entities/Workflow';

export class WorkflowsRepository implements IWorkflowsRepository {
  private repository: Repository<Workflow>;

  constructor() {
    this.repository = getRepository(Workflow);
  }

  async create({ code, messages }: ICreateWorkflowDTO): Promise<IWorkflow> {
    const workflow = this.repository.create({
      code,
      messages,
    });

    await this.repository.save(workflow);
    return workflow;
  }

  async setMessages(
    workflow: Workflow,
    messages: IMessage[]
  ): Promise<Workflow> {
    workflow.messages = messages;
    await this.repository.save(workflow);
    return workflow;
  }

  async getById(id: string): Promise<IWorkflow | undefined> {
    return this.repository.findOne(id);
  }
}
