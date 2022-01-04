import { IAnswer } from './IAnswer';
import { IWorkflow } from './IWorkflow';

export enum MessageTypes {
  TEXT = 'text',
}

export interface IMessage {
  id: string;
  messageType: string;
  text: string;
  workflowId: string;

  workflow: IWorkflow;
}
