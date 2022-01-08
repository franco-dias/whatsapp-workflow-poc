import { ICreateMessageSentDTO } from '../dtos/ICreateMessageSentDTO';
import { IMessageLogging } from '../entities/IMessageLogging';

export interface IMessagesLoggingRepository {
  create(data: ICreateMessageSentDTO): Promise<IMessageLogging>;
}
