import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

export const viewer = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    return userId !== null ? ctx.db.get(userId) : null;
  },
});

export const users = query({
  args: {},
  handler: async (ctx) => {
    console.log("&&&&", process.env.SITE_URL);
  },
});
