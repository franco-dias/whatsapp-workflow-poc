export enum ChatLoggingTypes {
  ERROR = 'ERROR',
  INFO = 'INFO',
}

export interface IChatLogging {
  id: string;
  where: string;
  log: string;
  type: ChatLoggingTypes;
}
