import { IWorkflow } from 'modules/app/entities/IWorkflow';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Message } from './Message';

@Entity({ name: 'workflow' })
export class Workflow implements IWorkflow {
  @PrimaryColumn()
  id: string;

  @Column()
  code: string;

  @OneToMany(() => Message, (message) => message.workflow, { cascade: true })
  messages?: Message[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
