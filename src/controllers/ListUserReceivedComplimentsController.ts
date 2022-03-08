import { Request, Response } from 'express';
import { ListUserReceivedComplimentsService } from '../services/ListUserReceivedComplimentsService';


class ListUserReceivedComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserReceivedComplimentsController = new ListUserReceivedComplimentsService();

        const compliments = await listUserReceivedComplimentsController.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceivedComplimentsController };