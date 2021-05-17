const koaRouter = require("koa-router");
const router = new koaRouter();
const os = require("os");
const db = require("../database.js");

router.get("/", async (ctx) => {
  await db.Request?.create({
    app: "Node",
    host: os.hostname(),
    ip: ctx.request.socket.localAddress.replace(/::ffff:/, ""),
    req_at: new Date().toUTCString().toString(),
    d: Number(new Date()),
  });
  const requests = await db.Request?.findAll({ order: [["d", "DESC"]] });
  //.then((requests) => {
  return await ctx.render("index", {
    requests: requests,
    db: process.env.POSTGRES_DB,
  });
});

module.exports = router;
