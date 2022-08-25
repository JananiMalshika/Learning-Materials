const Router = require("@koa/router");

const {
  LoginUser,
  UserRegister,
  GetOneUser,
  UpdateUser,
  GetAllUsers,
  DeleteUser,
  GetUserByRole,
} = require("../api/user.api");

const UserRouter = new Router({
  prefix: "/Users",
});

UserRouter.post("/", UserRegister);
UserRouter.get("/:id", GetOneUser); //Get one user
UserRouter.patch("/:id", UpdateUser); //Update One User
UserRouter.delete("/:id", DeleteUser); //Delete One User
UserRouter.post("/login", LoginUser);
UserRouter.get("/", GetAllUsers);
UserRouter.get("/getByType/:userType", GetUserByRole);

module.exports = UserRouter;
