import { ICreateWorkflowDTO } from 'modules/app/dtos/ICreateWorkflowDTO';
import { IWorkflow } from 'modules/app/entities/IWorkflow';
import { IWorkflowsRepository } from 'modules/app/repositories/IWorkflowsRepository';
import setWorkflowId from 'modules/app/utils/setWorkflowId';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateWorkflowUseCase {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  async execute(data: ICreateWorkflowDTO): Promise<IWorkflow> {
    const { code, messages } = data;
    const workflow = await this.workflowsRepository.create({ code, messages });

    const { id } = workflow;
    const messagesWithId = setWorkflowId(workflow.messages || [], id);
    const updated = await this.workflowsRepository.setMessages(
      workflow,
      messagesWithId
    );

    return updated;
  }
}

export { CreateWorkflowUseCase };
