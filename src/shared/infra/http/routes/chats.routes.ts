import { Router } from "express";

import { CreateChatController } from "@modules/chats/useCases/createChat/CreateChatController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const chatsRoutes = Router();

const createChatController = new CreateChatController();

chatsRoutes.post(
  '/',
  ensureAuthenticated,
  createChatController.handle
);

export { chatsRoutes };
