import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { loginSchema } from "../schemas";

const app = new Hono().post(
  // Route
  "/login",
  // Middleware Area
  zValidator("json", loginSchema),
  // callback
  async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });

    /* Usually we do this in nextjs ? */
    // const body = await c.req.json();

    return c.json({ email, password });
  }
);

export default app;
