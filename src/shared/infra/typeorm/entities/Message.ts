import { IMessage } from 'modules/app/entities/IMessage';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { Answer } from './Answer';
import { Workflow } from './Workflow';

@Entity({ name: 'workflow_message' })
export class Message implements IMessage {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'message_type' })
  messageType: string;

  @Column()
  text: string;

  @Column({ name: 'workflow_id' })
  workflowId: string;

  @ManyToOne(() => Workflow, (workflow) => workflow.messages)
  @JoinColumn({ name: 'workflow_id' })
  workflow: Workflow;

  @OneToMany(() => Answer, (answer) => answer.prevMessage, { cascade: true })
  possibleAnswers: Answer[];
}
