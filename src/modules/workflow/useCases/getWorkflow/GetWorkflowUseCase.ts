import { IWorkflow } from 'modules/workflow/entities/IWorkflow';
import { IWorkflowsRepository } from 'modules/workflow/repositories/IWorkflowsRepository';
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
