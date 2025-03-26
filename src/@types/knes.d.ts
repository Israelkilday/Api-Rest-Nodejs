/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Kenex } from "knex";
declare module "kenex/types/tables" {
  export interface Tables {
    transactions: {
      id: string;
      title: string;
      amount: number;
      created_at;
      session_id?: string;
    };
  }
}
