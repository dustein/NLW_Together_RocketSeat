import { Request, Response } from 'express';
import { ListUserSentComplimentsService } from '../services/ListUserSentComplimentsService';


class ListUserSentComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserReceivedComplimentsController = new ListUserSentComplimentsService();

        const compliments = await listUserReceivedComplimentsController.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSentComplimentsController };