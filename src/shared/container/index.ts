import { container, delay } from "tsyringe";

// import "@shared/container/providers";

import { ChatsRepository } from "@modules/chats/infra/prisma/repositories/ChatsRepository";
import { IChatsRepository } from "@modules/chats/repositories/IChatsRepository";

container.registerSingleton<IChatsRepository>(
  "ChatsRepository",
  delay(() => ChatsRepository)
);
