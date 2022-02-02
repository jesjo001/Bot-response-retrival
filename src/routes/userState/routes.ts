import express from 'express';
import {Express, Request, Response} from 'express';
import { 
    getUserStateHandler,
    getAllUserStateHandler,
    deleteEventHandler,
    updateUserStateHandler
} from '../../controller/userState.controller';
import requiresUser from "../../middleware/validation/requiresUser";

const UserStateRouter = express.Router();

UserStateRouter.use(requiresUser);

UserStateRouter.get("/:id", getUserStateHandler);
UserStateRouter.get("/get/all", getUserStateHandler);
UserStateRouter.delete("/del/:id", getUserStateHandler);
UserStateRouter.put("/update/:id", updateUserStateHandler);

export default UserStateRouter;