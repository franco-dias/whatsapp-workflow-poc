import { IAnswer } from 'modules/app/entities/IAnswer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { Message } from './Message';

@Entity({ name: 'workflow_answer' })
export class Answer implements IAnswer {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column({ name: 'answer_type' })
  type: string;

  @Column({ name: 'prev_message_id' })
  prevMessageId: string;

  @Column({ name: 'next_message_id' })
  nextMessageId?: string;

  @JoinColumn({ name: 'prev_message_id' })
  @ManyToOne(() => Message, (message) => message.possibleAnswers)
  prevMessage: Message;

  @JoinColumn({ name: 'next_message_id' })
  @OneToOne(() => Message, { cascade: true })
  nextMessage?: Message;
}
