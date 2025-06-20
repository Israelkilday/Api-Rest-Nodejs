import { execSync } from "child_process";
import { app } from "../src/app";
import request from "supertest";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });
  beforeEach(async () => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  }, 30000);

  it("Should be able to create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      })
      .expect(201);
  });

  it("Should be able to list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    if (!cookies) {
      throw new Error("No cookies returned from login");
    }

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "New transaction",
        amount: 5000,
      }),
    ]);
  });

  it("Should be able to get a specific transaction", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    if (!cookies) {
      throw new Error("No cookies returned from login");
    }

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    const transactionsId = listTransactionsResponse.body.transactions[0].id;

    const getTransactionsResponse = await request(app.server)
      .get(`/transactions/${transactionsId}`)
      .set("Cookie", cookies)
      .expect(200);

    expect(getTransactionsResponse.body.transaction).toEqual(
      expect.objectContaining({
        title: "New transaction",
        amount: 5000,
      })
    );
  });
});
