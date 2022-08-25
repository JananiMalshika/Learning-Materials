const Router = require("@koa/router");

const {
  ModuleCreate,
  GetAllModules,
  GetOneModule,
  UpdateModule,
  DeleteModule,
  GetModulesAcademicYear,
} = require("../api/module.api");

const UserRouter = new Router({
  prefix: "/Module",
});

UserRouter.post("/", ModuleCreate);
UserRouter.get("/:id", GetOneModule); //Get one user
UserRouter.patch("/:id", UpdateModule); //Update One User
UserRouter.delete("/:id", DeleteModule); //Delete One User
UserRouter.get("/", GetAllModules);
UserRouter.get("/academicyear", GetModulesAcademicYear);

module.exports = UserRouter;
