import { Router } from 'express';

export enum Queues {
  SEND_PENDING = 'SEND_PENDING',
}

export interface IContact {
  profile: { name: string };
  wa_id: string;
}

export interface IReceivedMessage {
  context: {
    from: string;
    id: string;
  };
  from: string;
  id: string;
  timestamp: string;
  type: 'text' | 'button';
  button?: {
    text: string;
  };
  text?: {
    body: string;
  };
}

export interface IMessageData {
  contacts: IContact[];
  messages: IReceivedMessage[];
}

export interface IQueueProvider {
  routes?: Router;
  addMessage(data: IMessageData): Promise<void>;
}
