import { IMessage } from './IMessage';

export interface IWorkflow {
  id: string;
  code: string;

  messages?: IMessage[];
}
