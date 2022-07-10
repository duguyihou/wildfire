import { Application } from "../deps.ts";
import { appConfig } from "./config/configuration.ts";

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Hello wildfire!
app.use((ctx) => {
  ctx.response.body = "Hello wildfire!";
});

await app.listen({ port: appConfig.port });
