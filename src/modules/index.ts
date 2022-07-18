import { userRouter } from "./users/index.ts";
import { composeMiddleware, Context, Middleware, Router } from "../../deps.ts";

const combineRouters = (routers: Router[]) => {
  const middleware: Middleware<
    Record<string, unknown>,
    Context<Record<string, unknown>, Record<string, unknown>>
  >[] = [];

  routers.forEach((router) => {
    middleware.push(router.routes());
    middleware.push(router.allowedMethods());
  });
  return composeMiddleware(middleware);
};

export const routers = combineRouters([userRouter]);
