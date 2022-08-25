const mongoose = require("mongoose");

const ModuleSchema = mongoose.Schema(
  {
    moduleName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    lecturerIds: {
      type: String,
      required: true,
    },
    academicYear: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Module = mongoose.model("Module", ModuleSchema);

module.exports = Module;
