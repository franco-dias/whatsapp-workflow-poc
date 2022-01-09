import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { IWildcard } from '@modules/workflow/entities/IWildcard';

import { Message } from './Message';
import { Workflow } from './Workflow';

@Entity({ name: 'workflow_wildcard' })
class Wildcard implements IWildcard {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column({ name: 'next_message_id' })
  nextMessageId: string;

  @Column({ name: 'workflow_id' })
  workflowId: string;

  @JoinColumn({ name: 'workflow_id' })
  @ManyToOne(() => Workflow, (workflow) => workflow.wildcards)
  workflow: Workflow;

  @JoinColumn({ name: 'next_message_id' })
  @OneToOne(() => Message)
  nextMessage: Message;
}

export { Wildcard };
