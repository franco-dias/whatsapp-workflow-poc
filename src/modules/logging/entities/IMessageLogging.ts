import { IAnswer } from '@modules/workflow/entities/IAnswer';
import { IMessage } from '@modules/workflow/entities/IMessage';

export enum MessageLoggingTypes {
  SENT = 'SENT',
  RECEIVED = 'RECEIVED',
}

export interface IMessageLogging {
  id: string;
  waId: string;
  customerWaId: string;
  type: MessageLoggingTypes;
  messageTimestamp: Date;

  messageId?: string;
  answerId?: string;

  message?: IMessage;
  answer?: IAnswer;
}
