/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote modules.
 */
export { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
export type { RouterContext } from "https://deno.land/x/oak@v10.5.1/mod.ts";
export { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
