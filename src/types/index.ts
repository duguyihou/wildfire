import { Context } from "../../deps.ts";

export type MiddlewareContext = Context<
  Record<string, unknown>,
  Record<string, unknown>
>;

export type Next = () => Promise<unknown>;
