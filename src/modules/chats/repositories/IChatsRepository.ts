import { ICreateChatDTO } from "../dtos/ICreateChatDTO";
interface IChatsRepository {
  create(data: ICreateChatDTO): Promise<[]/*Chat*/>;
  findById(id: string): Promise<{}/*Chat*/>;
}

export { IChatsRepository };
