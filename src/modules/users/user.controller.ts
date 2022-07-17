import userService from "./user.service.ts";
import { userContext } from "./user.types.ts";

const create = async (ctx: userContext<"/">) => {
  const { name } = await ctx.request.body({ type: "json" }).value;
  ctx.assert(name, 400, "The user info is malformed!");
  const createdUser = userService.create(name);
  ctx.response.status = 201;
  ctx.response.body = createdUser;
};

const findOne = (ctx: userContext<"/:userId">) => {
  const { userId } = ctx.params;
  if (!userId) return;
  const user = userService.findOne(userId);
  ctx.assert(user, 404, "The requested user doesn't exist");
  ctx.response.status = 200;
  ctx.response.body = user;
};

const findAll = (ctx: userContext<"/">) => {
  const users = userService.findAll();
  ctx.response.status = 200;
  ctx.response.body = users;
};

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
