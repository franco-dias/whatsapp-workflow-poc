import { Job, DoneCallback } from 'bull';

import { IMessageData } from '@shared/container/providers/QueueProvider/IQueueProvider';

class MessageWorker {
  static processMessageQueue(job: Job<IMessageData>, done: DoneCallback) {
    console.log('processing job');
    console.log(job.id);
    console.log(job.data);

    done();
  }
}

export { MessageWorker };
