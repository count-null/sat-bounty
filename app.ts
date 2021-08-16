import { Application } from "./deps.ts";
import router from "./router.ts";
import { HOST, PORT } from "./vars.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);
