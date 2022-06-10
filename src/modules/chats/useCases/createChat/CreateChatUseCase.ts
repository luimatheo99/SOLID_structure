import { inject, injectable } from "tsyringe";

import { IChatsRepository } from "@modules/chats/repositories/IChatsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  message: string;
}

@injectable()
class CreateChatUseCase {
  constructor(
    @inject("ChatsRepository")
    private chatsRepository: IChatsRepository
  ) {}

  async execute({
    message,
  }: IRequest): Promise<{}/*Chat*/> {
    try {
      const chat = await this.chatsRepository.create({
        message
      });

      return chat;
      
    } catch (error) {
      throw new AppError("Error save chat");
    }
  }
}

export { CreateChatUseCase };
