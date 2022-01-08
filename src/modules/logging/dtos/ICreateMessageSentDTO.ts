export interface ICreateMessageSentDTO {
  waId: string;
  customerWaId: string;
  messageId?: string;
  answerId?: string;
  sentAt: Date;
}
