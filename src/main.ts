import { Application } from "../deps.ts";
import { appConfig } from "./config/configuration.ts";
import { userRouter } from "./modules/users/index.ts";
import logger from "./middlewares/logger.ts";
import timing from "./middlewares/timing.ts";

const app = new Application();

app.use(logger);
app.use(timing);

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

await app.listen({ port: appConfig.port });
