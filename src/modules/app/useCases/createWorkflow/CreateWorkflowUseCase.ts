import { ICreateWorkflowDTO } from 'modules/app/dtos/ICreateWorkflowDTO';
import { IWorkflow } from 'modules/app/entities/IWorkflow';
import { IWorkflowsRepository } from 'modules/app/repositories/IWorkflowsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateWorkflowUseCase {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  async execute(data: ICreateWorkflowDTO): Promise<IWorkflow> {
    console.log(data);
    const workflow = await this.workflowsRepository.create(data);
    return workflow;
  }
}

export { CreateWorkflowUseCase };
