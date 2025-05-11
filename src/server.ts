import fastify from "fastify";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";
import cookie from "@fastify/cookie";

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("Http server running");
  });
