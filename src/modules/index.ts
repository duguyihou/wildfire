import { path, Router } from "../../deps.ts";

function getModuleDir(importMeta: ImportMeta): string {
  return path.resolve(path.dirname(path.fromFileUrl(importMeta.url)));
}

const applyApiMiddleware = () => {
  // const router = new Router({ prefix: "/api/v1" });
  const dir = getModuleDir(import.meta);
  for (const dirEntry of Deno.readDirSync(dir)) {
    console.log(dir);
    console.log(dirEntry.name);
  }
};

export default applyApiMiddleware;
