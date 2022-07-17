import { MiddlewareContext, Next } from "../types/index.ts";

const logger = async (ctx: MiddlewareContext, next: Next) => {
  await next();
  const responseTime = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
};

export default logger;
