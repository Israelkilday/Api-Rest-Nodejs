import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello World testing!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Http server running");
  });
