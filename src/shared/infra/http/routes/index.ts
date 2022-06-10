import { Router } from "express";

import { chatsRoutes } from "./chats.routes";

const router = Router();

router.use('/chats', chatsRoutes);

export { router };
