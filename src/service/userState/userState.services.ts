import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import UserState, { UserStateDocument } from "../../model/userState.model";

export const createUserState = async (
  input: DocumentDefinition<UserStateDocument>
) => {
  return await UserState.create(input);
};

export function findUserState(
  query: FilterQuery<UserStateDocument>,
  options: QueryOptions = { lean: true }
) {
  return UserState.findOne(query, {}, options);
}

export function findAllUserState() {
  return UserState.find({});
}

export const findAndUpdate = (
  query: FilterQuery<UserStateDocument>,
  update: UpdateQuery<UserStateDocument>,
  options: QueryOptions
) => {
  try {
    return UserState.findOneAndUpdate(query, update, options);
  } catch (error) {
    throw new Error(error as any);
  }
};

export function deleteUserState(query: FilterQuery<UserStateDocument>) {
  return UserState.deleteOne(query);
}
