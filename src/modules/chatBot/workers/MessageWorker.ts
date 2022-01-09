import { Job, DoneCallback } from 'bull';
import { inject, injectable } from 'tsyringe';

import {
  IMessageData,
  IQueueProvider,
} from '@shared/container/providers/QueueProvider/IQueueProvider';

@injectable()
class MessageWorker {
  constructor(
    @inject('QueueProvider')
    private queueProvider: IQueueProvider
  ) {
    this.queueProvider.process((job, cb) => this.processMessageQueue(job, cb));
  }

  async processMessageQueue(job: Job<IMessageData>, done: DoneCallback) {
    console.log('processing job', job.id);
    done();
  }
}

export { MessageWorker };
