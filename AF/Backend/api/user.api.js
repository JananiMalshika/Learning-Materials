const User = require("../models/user.model");
const bcrypt = require("bcrypt");

//Create new user
const UserRegister = async (ctx) => {
  try {
    const { userName, email, password, userType, other } = ctx.request.body;

    const usercheck = await User.findOne({ email: email });
    if (usercheck) {
      throw new Error("User Already Exist");
    } else {
      const salt = await bcrypt.genSalt(10);

      const hashpassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        userName,
        email,
        password: hashpassword,
        userType,
        other,
      });
      return (
        (ctx.response.status = 200), (ctx.body = { success: true, user: user })
      );
    }
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

//Login user
const LoginUser = async (ctx) => {
  try {
    const userdata = ctx.request.body;
    const user = await User.findOne({ email: userdata.email });

    if (user) {
      const ismatch = await bcrypt.compare(userdata.password, user.password);
      if (ismatch) {
        const result = {
          token: user._id,
          userType: user.userType,
        };
        return (
          (ctx.response.status = 200),
          (ctx.body = { success: true, result: result })
        );
      } else {
        throw new Error("password not match...!");
      }
    } else {
      throw new Error("User not found...!");
    }
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

//Get all users
const GetAllUsers = async (ctx) => {
  try {
    const users = await User.find();
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, users: users })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

//Get one user
const GetOneUser = async (ctx) => {
  try {
    const user = await User.findById(ctx.params.id);
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, user: user })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

//Update User
const UpdateUser = async (ctx) => {
  try {
    const userdata = ctx.request.body;

    const user = await User.findByIdAndUpdate(ctx.params.id, userdata);
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, user: user })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

//Delete User
const DeleteUser = async (ctx) => {
  try {
    const user = await User.findByIdAndDelete(ctx.params.id);
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, user: user })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

//Get user by role(userType)
const GetUserByRole = async (ctx) => {
  const { userType } = ctx.params;
  try {
    const users = await User.find({ userType });
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, users: users })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

module.exports = {
  LoginUser,
  UserRegister,
  GetOneUser,
  UpdateUser,
  GetAllUsers,
  DeleteUser,
  GetUserByRole,
};
