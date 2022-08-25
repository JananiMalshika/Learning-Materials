const Module = require("../models/module.model");

//Create new module
const ModuleCreate = async (ctx) => {
  try {
    const { moduleName, duration, lecturerIds, academicYear } =
      ctx.request.body;

    const user = await Module.create({
      moduleName,
      duration,
      lecturerIds,
      academicYear,
    });
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

//Get all modules
const GetAllModules = async (ctx) => {
  try {
    const users = await Module.find();
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

//Get one module
const GetOneModule = async (ctx) => {
  try {
    const user = await Module.findById(ctx.params.id);
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

//Update Module
const UpdateModule = async (ctx) => {
  try {
    const userdata = ctx.request.body;

    const user = await Module.findByIdAndUpdate(ctx.params.id, userdata);
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

//Delete Module
const DeleteModule = async (ctx) => {
  try {
    const user = await Module.findByIdAndDelete(ctx.params.id);
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

//Get modules according to academic year
const GetModulesAcademicYear = async (ctx) => {
  try {
    const students = await User.find({ academicYear: "Academic Year 1" });
    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, students: students })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

module.exports = {
  ModuleCreate,
  GetAllModules,
  GetOneModule,
  UpdateModule,
  DeleteModule,
  GetModulesAcademicYear,
};
