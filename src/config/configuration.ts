import { config } from "../../deps.ts";

export const appConfig = {
  port: Number(config().PORT) || 8000,
};
