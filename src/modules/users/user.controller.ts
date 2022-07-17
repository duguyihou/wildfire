import userService from "./user.service.ts";
import { userContext } from "./user.types.ts";

/**
 * create a user
 * @param ctx user context
 */
const create = async (ctx: userContext<"/">) => {
  const { name } = await ctx.request.body({ type: "json" }).value;
  ctx.assert(name, 400, "The user info is malformed!");
  const createdUser = userService.create(name);
  ctx.response.status = 201;
  ctx.response.body = createdUser;
};

/**
 * find user by userId
 * @param ctx user context
 * @returns user
 */
const findOne = (ctx: userContext<"/:userId">) => {
  const { userId } = ctx.params;
  if (!userId) return;
  const user = userService.findOne(userId);
  ctx.assert(user, 404, "The requested user doesn't exist");
  ctx.response.status = 200;
  ctx.response.body = user;
};

/**
 * find all users
 * @param ctx user context
 */
const findAll = (ctx: userContext<"/">) => {
  const users = userService.findAll();
  ctx.response.status = 200;
  ctx.response.body = users;
};

/**
 * update user info
 * @param ctx user context
 * @returns updated user
 */
const update = (ctx: userContext<"/:userId">) => {
  const { userId } = ctx.params;
  if (!userId) return;
  const user = userService.findOne(userId);
  if (!user) {
    ctx.response.status = 404;
    ctx.response.body = {
      success: false,
      message: "No user found",
    };
    return;
  }

  const updatedData = ctx.request.body({ type: "json" }).value;
  if (!updatedData) return;
  const updatedUser = userService.update(userId, updatedData);
  ctx.response.status = 200;
  ctx.response.body = {
    success: true,
    data: updatedUser,
  };
};

/**
 * delete user by userId
 * @param ctx user context
 * @returns deleted user
 */
const remove = (ctx: userContext<"/:userId">) => {
  const { userId } = ctx.params;
  if (!userId) return;
  const user = userService.findOne(userId);
  if (!user) {
    ctx.response.status = 404;
    ctx.response.body = {
      success: false,
      message: "No user found",
    };
    return;
  }
  const allUsers = userService.remove(userId);
  ctx.response.body = {
    success: true,
    data: allUsers,
  };
};

export default {
  create,
  findOne,
  findAll,
  update,
  remove,
};
