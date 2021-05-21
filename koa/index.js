const Koa = require("koa");
const path = require("path");
const render = require("koa-ejs");
const koaLogger = require("koa-logger");
const router = require("./routes/routes.js");
const staticCache = require("koa-static-cache");

const app = new Koa();

// const ip = req.socket.remoteAddress;
// const ipProxy = req.headers["x-forwarded-for"].split(/\s*,\s*/)[0]; <- Nginx proxy

render(app, {
  root: path.join(__dirname, "/views"),
  layout: false,
  viewExt: "html",
});

const PORT = process.env.PORT || 3000;

// Logger has to be the first one to be added
app
  .use(koaLogger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(staticCache("./images", { maxAge: 600000 }))
  .listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
