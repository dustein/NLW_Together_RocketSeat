import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserService } from "./services/AuthenticateUserService";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateCoplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ListTagController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateCoplimentController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listTagsController = new ListTagController();
const listUsersControlller = new ListUsersController();

router.post(
    "/tags",
    ensureAuthenticated,
    ensureAdmin,
    createTagController.handle
    );
    listTagsController
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.post(
    "/compliments",
    ensureAuthenticated,
    createComplimentController.handle);

router.get(
    "/users/compliments/sent",
    ensureAuthenticated,
    listUserSentComplimentsController.handle
);

router.get(
    "/users/compliments/received",
    ensureAuthenticated,
    listUserReceivedComplimentsController.handle
);

router.get(
    "/tags",
    ensureAuthenticated,
    listTagsController.handle
)

router.get(
    "/users",
    ensureAuthenticated,
    listUsersControlller.handle
);
export { router };