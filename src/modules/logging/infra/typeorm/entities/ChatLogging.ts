import { Column, Entity, PrimaryColumn } from 'typeorm';

import {
  ChatLoggingTypes,
  IChatLogging,
} from '@modules/logging/entities/IChatLogging';

@Entity({ name: 'chat_logging' })
class ChatLogging implements IChatLogging {
  @PrimaryColumn()
  id: string;

  @Column()
  where: string;

  @Column()
  log: string;

  @Column({
    type: 'enum',
    enum: ChatLoggingTypes,
    default: ChatLoggingTypes.ERROR,
  })
  type: ChatLoggingTypes;
}

export { ChatLogging };
