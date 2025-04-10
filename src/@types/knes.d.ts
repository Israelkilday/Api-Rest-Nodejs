// eslint-disable-next-line
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
