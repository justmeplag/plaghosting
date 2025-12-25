import {

```ts
import { Pool } from "pg";
const pool = new Pool({ connectionString: process.env.DB_URL });

export const query = (text: string, params?: any[]) => pool.query(text, params);