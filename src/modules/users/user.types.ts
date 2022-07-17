import { RouterContext } from "../../../deps.ts";

type Route = "/" | "/:userId";
export type userContext<R extends Route> = RouterContext<R>;
