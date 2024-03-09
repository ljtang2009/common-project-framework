import dotenv from 'dotenv';
import { join } from 'desm';

if (process.env.NODE_ENV !== undefined) {
  dotenv.config({
    path: [
      join(import.meta.url, '..', `.env.${process.env.NODE_ENV!}.local`),
      join(import.meta.url, '..', `.env.${process.env.NODE_ENV!}`),
      join(import.meta.url, '..', '.env'),
    ],
  });
}
