const koaRouter = require("koa-router");
const router = new koaRouter();
const os = require("os");
const { Request, sequelize } = require("../database.js");

router.redirect("/", "/node");

router.get("/node", async (ctx) => {
  await Request?.create({
    app: "Node",
    url: ctx.request.href,
    host: os.hostname(),
    // ip: ctx.request.socket.localAddress.slice(7),
    ip: ctx.request.ip.slice(7),
    req_at: new Date().toUTCString().toString(),
    d: Number(new Date()),
  });

  // sequelize.query(`INSERT INTO requests (app, url, host, ip, req_at,d)
  // VALUES ( '${"Node"}, '${ctx.request.href}', '${os.hostname()}',..)`,
  // { type: sequelize.QueryTypes.INSERT } )

  const requests = await Request?.findAll({ order: [["d", "DESC"]] });

  // https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-query
  // execute a query [results, metada] without the metadata, otherwise shoud use "count[0]"
  const counts = await sequelize.query(
    "SELECT COUNT(requests.host), requests.host, requests.app FROM requests GROUP BY requests.app, requests.host",
    { type: sequelize.QueryTypes.SELECT } // to get only the "[results]"
  );

  return await ctx.render("index", {
    requests: requests,
    db: process.env.POSTGRES_DB,
    data: counts,
  });
});

router.get("/node/api", async (ctx) => {
  const lastRequest = await Request?.create({
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
