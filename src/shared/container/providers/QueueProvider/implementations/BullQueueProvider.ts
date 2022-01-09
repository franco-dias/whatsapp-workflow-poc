import Queue from 'bull';

import redis from '@config/redis';
import limiter from '@config/whatsappLimiter';

import { IMessageData, IQueueProvider } from '../IQueueProvider';

class BullQueueProvider implements IQueueProvider {
  private messagesQueue: Queue.Queue<IMessageData>;

  constructor() {
    console.log('[BullJS] Connecting... (assume good connection if no error)');
    this.messagesQueue = new Queue('send_pending', {
      redis,
      limiter,
    });
  }

  async addMessage(data: IMessageData): Promise<void> {
    this.messagesQueue.add(data);
  }

  async process(cb: Queue.ProcessCallbackFunction<IMessageData>) {
    this.messagesQueue.process(cb);
  }
}

export { BullQueueProvider };
