import fastify from "fastify";
import { transactionsRoutes } from "./routes/transactions";
import fastifyCookie from "@fastify/cookie";

export const app = fastify();

app.register(fastifyCookie);
app.register(transactionsRoutes, {
  prefix: "transactions",
});
