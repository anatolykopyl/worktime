import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { Session, CookieStore } from "https://deno.land/x/oak_sessions@v3.4.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

import routes from './routes/index.ts'

const PORT = Number(Deno.env.get('PORT'));
const SECRET = Deno.env.get('SECRET');

const app = new Application();
const store = new CookieStore(SECRET);
const session = new Session(store);

app.use(session.initMiddleware());
app.use(oakCors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(routes.routes());
app.use(routes.allowedMethods());

console.log(`👂 on port ${PORT}`);
await app.listen({ port: PORT });
