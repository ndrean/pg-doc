const koa = require("koa");
const path = require("path");
const render = require("koa-ejs");
const Logger = require("koa-logger");
const router = require("./routes/routes.js");
const staticCache = require("koa-static-cache");
const app = new koa();

render(app, {
  root: path.join(__dirname, "/views"),
  layout: false,
  viewExt: "html",
});

// Logger has to be the first one to be added
app
  .use(Logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(staticCache("./images", { maxAge: 600000 }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
