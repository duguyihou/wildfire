import { Router } from "../../../deps.ts";
import userConroller from "./user.controller.ts";

export const userRouter = new Router({ prefix: "/users" });

userRouter
  .get("/", userConroller.findAll)
  .get("/:userId", userConroller.findOne)
  .post("/", userConroller.create)
  .put("/:userId", userConroller.update)
  .delete("/:userId", userConroller.remove);
