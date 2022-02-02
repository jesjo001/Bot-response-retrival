import express from 'express';
import { 
    createUserHandler,
} from '../../controller/user.controller';
import {
     userValidationRules,
     sessionValidationRules, 
     validate 
} from '../../middleware/validation/validator';
import { 
    createUserSessionHandler, 
    getUserSessionsHandler, 
    invalidateUserSessionHandler
} from '../../controller/session.controller';
import requiresUser from "../../middleware/validation/requiresUser"

const UserRouter = express.Router();

UserRouter.post('/create', userValidationRules(), validate, createUserHandler)
//User session routes
UserRouter.post('/sessions', sessionValidationRules(), validate, createUserSessionHandler)
UserRouter.delete('/sessions', requiresUser, invalidateUserSessionHandler)
UserRouter.get('/sessions', requiresUser, getUserSessionsHandler )

UserRouter.post('/login', sessionValidationRules(), validate, createUserSessionHandler)
UserRouter.delete('/logout', requiresUser, invalidateUserSessionHandler)


export default UserRouter;
