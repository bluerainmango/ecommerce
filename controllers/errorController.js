const ErrorFactory = require("../util/ErrorFactory");

const resErrorDev = (err, req, res) => {
  //! 1) Development
  //* 1.1) API

  console.log(("🚨 error", err.name));
  console.log(("🚨 error", err));

  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      err: err,
    });
  }

  //* 1.2) Page
};

const resErrorProd = (err, req, res) => {
  //! 2) Production
  //* 2.1) API

  if (req.originalUrl.startsWith("/api")) {
    // 2.1.1) Operational error. Trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    console.log("💥 Programming ERROR:", err);

    //duplicated email validation err

    // 2.1.2) Programming or other unknown error: don't leak error details
    return res.status(500).json({
      status: "error",
      message:
        "Something is wrong. Error in programing or unknown error is occured. Try again later",
    });
  }

  //* 2.2)Page
  // 2.2.1) Operational error
  // 2.2.2) Programing error
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new ErrorFactory(400, message);
};

const handleDuplicateFieldsDB = (err) => {
  const message = `${Object.values(err.keyValue)} is already taken.`;
  return new ErrorFactory(400, message);
};

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    resErrorDev(err, req, res);
  }

  if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.name = err.name;
    error.message = err.message;

    console.log("👹 production error: ", error);

    if (error.name === "ValidationError") {
      error = handleValidationErrorDB(error);
    }

    if (error.code === 11000) error = handleDuplicateFieldsDB(error);

    resErrorProd(error, req, res);
  }
};

module.exports = errorController;
