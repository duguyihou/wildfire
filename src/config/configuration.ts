import { config } from "../../deps.ts";

export const appConfig = {
  port: Number(await config().PORT),
};
