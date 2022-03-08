import { ListTagService } from "../services/ListTagService";
import { Request, Response } from "express";

class ListTagController {
    async handle(request: Request, response: Response) {
        const listTagsService = new ListTagService();

        const tags = await listTagsService.execute();

        return response.json(tags);
    }
}


export { ListTagController };