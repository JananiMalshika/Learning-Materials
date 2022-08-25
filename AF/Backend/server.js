const koa = require("koa");
const bodyparser = require("koa-bodyparser");
const cors = require("@koa/cors");
const { connection } = require("./dal/database");
const UserRouter = require("./routes/user.routes");
const ModuleRouter = require("./routes/module.routes");

const app = new koa();

app.use(bodyparser());
app.use(cors());
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());
app.use(ModuleRouter.routes()).use(ModuleRouter.allowedMethods());

app.listen(5000, () => {
  console.log("Server run on port 5000");
  connection();
});
