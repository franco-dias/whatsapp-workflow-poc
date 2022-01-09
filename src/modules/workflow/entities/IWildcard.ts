import { IMessage } from './IMessage';
import { IWorkflow } from './IWorkflow';

export interface IWildcard {
  id: string;
  text: string;
  workflowId: string;
  nextMessageId: string;

  workflow: IWorkflow;
  nextMessage: IMessage;
}
