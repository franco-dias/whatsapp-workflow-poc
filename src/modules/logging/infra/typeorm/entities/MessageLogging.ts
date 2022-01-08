import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import {
  IMessageLogging,
  MessageLoggingTypes,
} from '@modules/logging/entities/IMessageLogging';
import { Answer } from '@modules/workflow/infra/typeorm/entities/Answer';
import { Message } from '@modules/workflow/infra/typeorm/entities/Message';

@Entity({ name: 'message_logging' })
class MessageLogging implements IMessageLogging {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'wa_id' })
  waId: string;

  @Column({ name: 'customer_wa_id' })
  customerWaId: string;

  @Column({ name: 'message_id' })
  messageId?: string;

  @Column({ name: 'answer_id' })
  answerId?: string;

  @CreateDateColumn({ name: 'message_timestamp' })
  messageTimestamp: Date;

  @Column({
    type: 'enum',
    enum: MessageLoggingTypes,
    default: MessageLoggingTypes.SENT,
  })
  type: MessageLoggingTypes;

  @JoinColumn({ name: 'message_id' })
  @ManyToOne(() => Message)
  message?: Message;

  @JoinColumn({ name: 'answer_id' })
  @ManyToOne(() => Answer)
  answer?: Answer;
}

export { MessageLogging };
