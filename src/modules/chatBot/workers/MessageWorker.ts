import { Job, DoneCallback } from 'bull';
import { inject, injectable } from 'tsyringe';

import { IWorkflowsRepository } from '@modules/workflow/repositories/IWorkflowsRepository';
import {
  IMessageData,
  IQueueProvider,
} from '@shared/container/providers/QueueProvider/IQueueProvider';

@injectable()
class MessageWorker {
  constructor(
    @inject('QueueProvider')
    private queueProvider: IQueueProvider,
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {
    this.queueProvider.process((job, cb) => this.processMessageQueue(job, cb));
  }

  async processMessageQueue(job: Job<IMessageData>, done: DoneCallback) {
    console.log(job.id);
    const workflow = await this.workflowsRepository.getById(
      'cbf8eec7-c4b0-4876-9c0c-ac1460219e49'
    );

    console.log(workflow);
    done();
  }
}

export { MessageWorker };
