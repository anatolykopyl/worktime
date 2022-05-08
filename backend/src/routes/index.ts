import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.29.4/mod.ts";

import User from '../models/User.ts';
import getProviderId from '../getProviderId.ts';

const MONGODB_URI = String(Deno.env.get('MONGODB_URI'));

const client = new MongoClient();
await client.connect(MONGODB_URI);

const db = client.database("worktime");
const users = db.collection<User>("users");

const endpoints = new Router()
  .post("/login", async (ctx) => {
    const body = await ctx.request.body({ type: "json" }).value;
    const token = body.token;
    const authProvider = body.authProvider;

    const providerId = await getProviderId(token, authProvider);

    let user = await users.findOne({
      providerId,
      authProvider
    });

    if (!user) {
      user = new User({
        providerId,
        authProvider
      });
      await users.insertOne(user);
    }

    await ctx.state.session.set('userId', user.id);

    ctx.response.body = 'success';
  })

const routes = new Router()
  .use("/api", endpoints.routes(), endpoints.allowedMethods())

export default routes;
