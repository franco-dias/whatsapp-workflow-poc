import { IAnswer } from '../entities/IAnswer';

export interface ICreateMessageDTO {
  text: string;
  answers: IAnswer[];
}
