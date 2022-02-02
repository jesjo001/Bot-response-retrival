import { omit, get } from "lodash";
import log from "../logger";
import { Request, Response } from "express";
import {
    createHobby,
    findHobby,
    findAllHobbies,
    findAndUpdate,
    deleteHobby
 } from "../service/hobbies/hobbies.services";

 export const getHobbyHandler = async (req: Request, res: Response) => {

    try{

        const hobbyId = get(req, "params.id");

        const hobby = await findHobby({ _id: hobbyId });

        if(!hobby) return res.status(404).json({
            status: 404,
            message: "Hobby not found.",
        });

        return res.status(200).json({
            status: 200,
            hobby,
        });
        
    } catch(e){
        log.error(e);
        return res.status(500).json({
        status: 500,
        message: "Ops something went wrong. Please try again later!!",
        });
    }

 }

 export const getAllHobbyHandler = async (req: Request, res: Response) => {

  try {

    const hobbies = await findAllHobbies();

    if (!hobbies) {
      return res.status(404).json({
        status: 404,
        message: "No Hobby Found.",
      });
    }

    return res.status(200).json({
      status: 200,
      hobbies,
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

    const hobbyId = get(req, "params.id");


    const hobby = await findHobby({ _id: hobbyId });

    if (!hobby) {
      return res.status(404).json({
        status: 404,
        message: "Hobby not found.",
      });
    }

   let response = await deleteHobby({ _id: hobbyId });

    return res.status(200).json({
      status: 200,
      message: "Hobby deleted.",
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


export const updateHobbyHandler = async (req: Request, res: Response) => {
  try {
    const hobbyId = get(req, "params.id");
    const update = req.body;

    const hobby = await findHobby({ _id: hobbyId });

    if (!hobby) {
      return res
        .status(404)
        .json({ message: "Invalid parameter. Hobby not found." });
    }

    const updatedHobby = await findAndUpdate({ _id: hobbyId }, update, {
      new: true,
    });

    return res.status(200).json({ status: 200, hobby: updatedHobby });
  } catch (err) {
    //log error with logger which doesn't block i/o like console.log does
    log.error(err);
    return res.status(500).json({
      status: 500,
      message: "Ops something went wrong. Please try again later!!",
    });
  }
};