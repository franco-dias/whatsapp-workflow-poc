import { IMessage } from 'modules/workflow/entities/IMessage';

export interface IRequest {
  code: string;
  messages: IMessage[];
}
