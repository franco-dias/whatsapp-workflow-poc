import Queue from 'bull';
import { Router } from 'express';

import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import redis from '@config/redis';
import limiter from '@config/whatsappLimiter';

import { IMessageData, IQueueProvider } from '../IQueueProvider';

class BullQueueProvider implements IQueueProvider {
  private messagesQueue: Queue.Queue<IMessageData>;
  private serverAdapter: ExpressAdapter;
  routes: Router;

  constructor() {
    console.log('[BullJS] Connecting... (assume good connection if no error)');
    this.messagesQueue = new Queue('send_pending', {
      redis,
      limiter,
    });
    this.serverAdapter = new ExpressAdapter();

    createBullBoard({
      queues: [new BullAdapter(this.messagesQueue)],
      serverAdapter: this.serverAdapter,
    });

    this.serverAdapter.setBasePath('/admin/queues');
    this.routes = this.serverAdapter.getRouter();
  }

  async addMessage(data: IMessageData): Promise<void> {
    this.messagesQueue.add(data);
  }

  async process(cb: Queue.ProcessCallbackFunction<IMessageData>) {
    this.messagesQueue.process(cb);
  }
}

export { BullQueueProvider };
