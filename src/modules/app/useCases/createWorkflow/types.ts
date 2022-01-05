import { IMessage } from 'modules/app/entities/IMessage';

export interface IRequest {
  code: string;
  messages: IMessage[];
}
