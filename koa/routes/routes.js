const koaRouter = require("koa-router");
const router = new koaRouter();
const os = require("os");
// const reqIp = require("request-ip");
const db = require("../database.js");

router.get("/", async (ctx) => {
  // console.log(reqIp.getClientIp(ctx.request));
  await db.Request?.create({
    app: "Node",
    host: os.hostname(),
    // ip: reqIp.getClientIp(ctx.request)
    ip: ctx.request.socket.localAddress.replace(/::ffff:/, ""),
    req_at: new Date().toUTCString().toString(),
  });
  const requests = await db.Request?.findAll({ order: [["req_at", "DESC"]] });
  //.then((requests) => {
  return await ctx.render("index", {
    requests: requests,
    db: process.env.POSTGRES_DB,
  });
});

module.exports = router;
