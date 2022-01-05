import { IMessage } from '../entities/IMessage';

export interface ICreateWorkflowDTO {
  code: string;
  messages: IMessage[];
}
