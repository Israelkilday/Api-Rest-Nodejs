import fastify from "fastify";
import { transactionsRoutes } from "./routes/transactions";
import fastifyCookie from "@fastify/cookie";

export const app = fastify();

app.register(fastifyCookie);
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
// app.addHook("preHandler", async (request, reply) => {
//   console.log(`[${request.method}]${request.url}`);
// });
app.register(transactionsRoutes, {
  prefix: "transactions",
});
