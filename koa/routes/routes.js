const koaRouter = require("koa-router");
const router = new koaRouter();
const os = require("os");
const db = require("../database.js");

router.get("/", async (ctx) => {
  await db.Request?.create({
    app: "Node",
    url: ctx.request.href,
    host: os.hostname(),
    // ip: ctx.request.socket.localAddress.slice(7),
    ip: ctx.request.ip.slice(7),
    req_at: new Date().toUTCString().toString(),
    d: Number(new Date()),
  });
  const requests = await db.Request?.findAll({ order: [["d", "DESC"]] });

  return await ctx.render("index", {
    requests: requests,
    db: process.env.POSTGRES_DB,
  });
});

router.get("/api", async (ctx) => {
  return (ctx.body = {
    status: "success",
    json: "ok",
  });
});

module.exports = router;
