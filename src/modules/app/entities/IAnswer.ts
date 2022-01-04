import { IMessage } from './IMessage';

export enum AnswerTypes {
  DELIVERS_DOCUMENT,
  TRIGGERS_MESSAGE,
  ENDS_CONVERSATION,
}

export interface IAnswer {
  id: string;
  text: string;
  type: string;
  prevMessageId: string;
  nextMessageId?: string;
  prevMessage: IMessage;
  nextMessage?: IMessage;
}
