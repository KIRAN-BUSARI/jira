import { Hono } from "hono";
import { ID } from "node-appwrite";
import { AUTH_COOKIE } from "../constants";
import { zValidator } from "@hono/zod-validator";
import { createAdminClient } from "@/lib/appwrite";
import { deleteCookie, setCookie } from "hono/cookie";
import { loginSchema, signUpSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  .get("/current", sessionMiddleware, async (c) => {
    const user = c.get("user");

    return c.json({ data: user });
  })
  .post(
    // Route
    "/login",
    // Middleware Area
    zValidator("json", loginSchema),
    // callback
    async (c) => {
      const { email, password } = c.req.valid("json");

      const { account } = await createAdminClient();

      const session = await account.createEmailPasswordSession(email, password);

      setCookie(c, AUTH_COOKIE, session.secret, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
      });

      /* Usually we do this in nextjs ? */
      // const body = await c.req.json();

      return c.json({ success: true });
    }
  )
  .post(
    // Route
    "/signup",
    // Middleware Area
    zValidator("json", signUpSchema),
    // callback
    async (c) => {
      const { name, email, password } = c.req.valid("json");

      const { account } = await createAdminClient();
      const user = await account.create(ID.unique(), email, password, name);

      const session = await account.createEmailPasswordSession(email, password);

      setCookie(c, AUTH_COOKIE, session.secret, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
      });

      return c.json({ success: true, data: user });
    }
  )
  .post("/logout", sessionMiddleware, async (c) => {
    const account = c.get("account");

    await account.deleteSession("current");
    deleteCookie(c, AUTH_COOKIE);
    return c.json({ success: true });
  });

export default app;
