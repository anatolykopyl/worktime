import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
// import onyx from "https://deno.land/x/onyx@v1.0.1/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.29.4/mod.ts";

import User from './models/User.ts';
import getUserId from './getUserId.ts';

const client = new MongoClient();
await client.connect(config().MONGODB_URI);

const db = client.database("worktime");
const users = db.collection<User>("users");

const endpoints = new Router()
  .post("/login", async (ctx) => {
    const body = await ctx.request.body({ type: "json" }).value;
    const token = body.token;
    const authProvider = body.authProvider;

    const userId = await getUserId(token, authProvider);

    await users.insertOne(new User({
      userId,
      authProvider
    }));

    ctx.response.body = 'success';
  })

const routes = new Router()
  .use("/api", endpoints.routes(), endpoints.allowedMethods())
  // .use(onyx.initialize())

export default routes;
