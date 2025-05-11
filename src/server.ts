import fastify from "fastify";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie);
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
app.addHook("preHandler", async (request, reply) => {
  console.log(`[${request.method}]${request.url}`);
});
app.register(transactionsRoutes, {
  prefix: "transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("Http server running");
  });
