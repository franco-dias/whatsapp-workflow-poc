import { IWorkflow } from 'modules/app/entities/IWorkflow';
import { IWorkflowsRepository } from 'modules/app/repositories/IWorkflowsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetWorkflowUseCase {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  async execute(id: string): Promise<IWorkflow | undefined> {
    const workflow = await this.workflowsRepository.getById(id);
    return workflow;
  }
}

export { GetWorkflowUseCase };
