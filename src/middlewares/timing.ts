import { MiddlewareContext, Next } from "../types/index.ts";

const timing = async (ctx: MiddlewareContext, next: Next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

export default timing;
