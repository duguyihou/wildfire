import { Application } from "../deps.ts";
import { appConfig } from "./config/configuration.ts";
import logger from "./middlewares/logger.ts";
import timing from "./middlewares/timing.ts";
import { routers } from "./modules/index.ts";
const app = new Application();

app.use(logger);
app.use(timing);

app.use(routers);

await app.listen({ port: appConfig.port });
