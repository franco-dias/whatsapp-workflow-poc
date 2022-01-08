import { IAnswer } from '../entities/IAnswer';
import { IMessage } from '../entities/IMessage';

function setId(message: IMessage, id: string): IMessage {
  message.workflowId = id;
  if (!message.possibleAnswers) return message;

  message.possibleAnswers = message.possibleAnswers.map((answer) => {
    if (answer.nextMessage) {
      answer.nextMessage = setId(answer.nextMessage, id);
    }
    return answer;
  });

  return message;
}

export default function setWorkflowId(messages: IMessage[], id: string) {
  messages.forEach((message) => {
    message.workflowId = id;
    if (!message.possibleAnswers) return;
    const answers: IAnswer[] = message.possibleAnswers;

    answers.forEach((answer) => {
      if (answer.nextMessage) {
        answer.nextMessage = setId(answer.nextMessage, id);
      }
    });
  });
  return messages;
}
