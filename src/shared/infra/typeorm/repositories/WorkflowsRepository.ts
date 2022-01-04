import { ICreateWorkflowDTO } from 'modules/app/dtos/ICreateWorkflowDTO';
import { IWorkflow } from 'modules/app/entities/IWorkflow';
import { IWorkflowsRepository } from 'modules/app/repositories/IWorkflowsRepository';
import { getRepository, Repository } from 'typeorm';

import { Workflow } from '../entities/Workflow';

export class WorkflowsRepository implements IWorkflowsRepository {
  private repository: Repository<Workflow>;

  constructor() {
    this.repository = getRepository(Workflow);
  }

  async create({ code }: ICreateWorkflowDTO): Promise<IWorkflow> {
    const workflow = this.repository.create({
      code,
    });

    await this.repository.save(workflow);
    return workflow;
  }
}
