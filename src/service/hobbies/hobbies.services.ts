import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import Hobby, { HobbyDocument } from "../../model/hobbies.model";

export function createHobby(input: DocumentDefinition<HobbyDocument> ){
    return Hobby.create(input);
}

export  function  findHobby(
    query: FilterQuery<HobbyDocument>,
    options: QueryOptions = { lean: true }
) {
    return Hobby.findOne(query, {}, options);
}

export function findAllHobbies() {
  return Hobby.find({});
}

export function findAndUpdate(
  query: FilterQuery<HobbyDocument>,
  update: UpdateQuery<HobbyDocument>,
  options: QueryOptions
) {
  return Hobby.findOneAndUpdate(query, update, options);
}

export function deleteHobby(query: FilterQuery<HobbyDocument>) {
  return Hobby.deleteOne(query);
}
