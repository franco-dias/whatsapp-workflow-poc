import { IAnswer } from '../entities/IAnswer';
import { IWorkflow } from '../entities/IWorkflow';

function getRecursiveIds(possibleAnswers: IAnswer[]) {
  const ids: string[] = [];
  possibleAnswers.forEach((answer) => {
    const { nextMessage } = answer;
    if (nextMessage) {
      ids.push(nextMessage.id);
      const { possibleAnswers: nextMessageAnswers } = nextMessage;
      if (nextMessageAnswers) {
        ids.concat(getRecursiveIds(nextMessageAnswers));
      }
    }
  });

  return ids;
}

export default function getMessageIds(workflow: IWorkflow): string[] {
  const ids: string[] = [];

  const { messages } = workflow;

  if (!messages) return [];

  ids.concat((messages || []).map((item) => item.id));

  messages.forEach((message) => {
    const { possibleAnswers } = message;
    if (possibleAnswers) {
      ids.concat(getRecursiveIds(possibleAnswers));
    }
  });

  return ids;
}

/*
  message => message.possibleAnswers
  answer => answer.nextMessage 
*/
