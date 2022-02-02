import express from 'express';
import {Express, Request, Response} from 'express';
import { 
    getHobbyHandler,
    getAllHobbyHandler,
    deleteEventHandler,
    updateHobbyHandler,
} from '../../controller/hobbies.controller';
import requiresUser from "../../middleware/validation/requiresUser";

const HobbyRouter = express.Router();

HobbyRouter.use(requiresUser);

HobbyRouter.get("/:id", getHobbyHandler);
HobbyRouter.get("/get/all", getAllHobbyHandler);
HobbyRouter.delete("/del/:id", deleteEventHandler);
HobbyRouter.put("/:id", updateHobbyHandler);

export default HobbyRouter;
