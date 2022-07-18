/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote modules.
 */
export {
  Application,
  composeMiddleware,
  Router,
} from "https://deno.land/x/oak@v10.5.1/mod.ts";
export type {
  Context,
  Middleware,
  RouterContext,
} from "https://deno.land/x/oak@v10.5.1/mod.ts";
