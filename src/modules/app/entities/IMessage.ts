import { IAnswer } from './IAnswer';
import { IWorkflow } from './IWorkflow';

export enum MessageTypes {
  TEXT = 'text',
}

export interface IMessage {
  id: string;
  text: string;
  role?: string;
  messageType: string;

  workflowId: string;
  workflow: IWorkflow;
  possibleAnswers?: IAnswer[];
}
