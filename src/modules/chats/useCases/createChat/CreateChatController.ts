import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateChatUseCase } from "./CreateChatUseCase";

class CreateChatController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      message
    } = request.body;

    const createChatUseCase = container.resolve(CreateChatUseCase);

    const chat = await createChatUseCase.execute({
      message,
    });

    return response.status(201).json(chat);
  }
}

export { CreateChatController };
