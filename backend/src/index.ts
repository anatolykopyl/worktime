import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

import routes from './routes.ts'

const app = new Application();
app.use(oakCors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(routes.routes());
app.use(routes.allowedMethods());

console.log(`👂 on port ${Number(config().PORT)}`);
await app.listen({ port: Number(config().PORT) });
