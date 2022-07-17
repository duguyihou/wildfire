/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote modules.
 */
export { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
export type {
  Context,
  RouterContext,
} from "https://deno.land/x/oak@v10.5.1/mod.ts";
export * as path from "https://deno.land/std@0.138.0/path/mod.ts";
