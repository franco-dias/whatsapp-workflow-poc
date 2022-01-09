import { IMessage } from './IMessage';
import { IWildcard } from './IWildcard';

export interface IWorkflow {
  id: string;
  code: string;

  wildcards?: IWildcard[];
  messages?: IMessage[];
}
