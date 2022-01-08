import { IMessagesRepository } from 'modules/app/repositories/IMessagesRepository';
import { getRepository, Repository } from 'typeorm';

import { Message } from '../entities/Message';

class MessagesRepository implements IMessagesRepository {
  private repository: Repository<Message>;

  constructor() {
    this.repository = getRepository(Message);
  }
}

export { MessagesRepository };
