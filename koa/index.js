const koa = require("koa");
const path = require("path");
const render = require("koa-ejs");
// const koaRouter = require("koa-router");
const Logger = require("koa-logger");
const router = require("./routes/routes.js");
const static = require("koa-static");

const app = new koa();

render(app, {
  root: path.join(__dirname, "views"),
  layout: false,
  viewExt: "html",
});

// Logger has to be the first one to be added
app
  .use(Logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(static("./images"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
