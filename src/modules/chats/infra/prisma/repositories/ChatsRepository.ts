import { ICreateChatDTO } from "@modules/chats/dtos/ICreateChatDTO";
import { IChatsRepository } from "@modules/chats/repositories/IChatsRepository";
import { PrismaClient } from '@prisma/client';

class ChatsRepository implements IChatsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create({
    message,
    id,
  }: ICreateChatDTO): Promise<[]/*Chat*/> {
    const chat = this.prisma.chats.create({
      message,
      id,
    });

    await this.prisma.chats.save(chat);

    return chat;
  }

  async findById(id: string): Promise<{}/*Chat*/> {
    const chat = await this.prisma.chats.findOne(id);
    return chat;
  }

}

export { ChatsRepository };
