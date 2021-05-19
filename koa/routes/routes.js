const koaRouter = require("koa-router");
const router = new koaRouter();
const os = require("os");
const db = require("../database.js");

router.redirect("/", "/node");

router.get("/node", async (ctx) => {
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

router.get("/node/api", async (ctx) => {
  const lastRequest = await db.Request?.create({
    app: "Node",
    url: ctx.request.href,
    host: os.hostname(),
    // ip: ctx.request.socket.localAddress.slice(7),
    ip: ctx.request.ip.slice(7),
    req_at: new Date().toUTCString().toString(),
    d: Number(new Date()),
  });
  const response = { status: "success", json: lastRequest };
  return (ctx.body = response);
});

module.exports = router;
