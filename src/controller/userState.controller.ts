import { omit, get } from "lodash";
import log from "../logger";
import { Request, Response } from "express";
import {
    createUserState,
    findUserState,
    findAllUserState,
    findAndUpdate,
    deleteUserState
 } from "../service/userState/userState.services";

 export const getUserStateHandler = async (req: Request, res: Response) => {

    try{

        const userStateId = get(req, "params.id");

        const state = await findUserState({ _id: userStateId });

        if(!state) return res.status(404).json({
            status: 404,
            message: "User State not found.",
        });

        return res.status(200).json({
            status: 200,
            state,
        });
        
    } catch(e){
        log.error(e);
        return res.status(500).json({
        status: 500,
        message: "Ops something went wrong. Please try again later!!",
        });
    }

 }

 export const getAllUserStateHandler = async (req: Request, res: Response) => {

  try {

    const states = await findAllUserState();

    if (!states) {
      return res.status(404).json({
        status: 404,
        message: "No User State collection Found.",
      });
    }

    return res.status(200).json({
      status: 200,
      states,
    });
  } catch (err) {
    //log error with logger which doesn't block i/o like console.log does
    log.error(err);
    return res.status(500).json({
      status: 500,
      message: "Ops something went wrong. Please try again later!!",
    });
  }

};


export const deleteEventHandler = async (req: Request, res: Response) => {
  try {

    const userStateId = get(req, "params.id");

    const state = await findUserState({ _id: userStateId });

    if (!state) {
      return res.status(404).json({
        status: 404,
        message: "User State not found.",
      });
    }

   let response = await deleteUserState({ _id: userStateId });

    return res.status(200).json({
      status: 200,
      message: "User State deleted.",
    });
  } catch (err) {
    //log error with logger which doesn't block i/o like console.log does
    log.error(err);
    return res.status(500).json({
      status: 500,
      message: "Ops something went wrong. Please try again later!!",
    });
  }
};


export const updateUserStateHandler = async (req: Request, res: Response) => {
  try {
    const userStateId = get(req, "params.id");
    const update = req.body;

    const state = await findUserState({ _id: userStateId });

    if (!state) {
      return res
        .status(404)
        .json({ message: "Invalid parameter. State not found." });
    }

    const updatedHobby = await findAndUpdate({ _id: userStateId }, update, {
      new: true,
    });

    return res.status(200).json({ status: 200, state: updatedHobby });
  } catch (err) {
    //log error with logger which doesn't block i/o like console.log does
    log.error(err);
    return res.status(500).json({
      status: 500,
      message: "Ops something went wrong. Please try again later!!",
    });
  }
};