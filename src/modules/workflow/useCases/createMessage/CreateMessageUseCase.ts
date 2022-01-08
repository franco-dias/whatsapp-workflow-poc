import { inject, injectable } from 'tsyringe';

@injectable()
class CreateMessageUseCase {
  constructor() {}

  async execute(): Promise<void> {}
}

export { CreateMessageUseCase };
