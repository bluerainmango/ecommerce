const resErrorDev = (err, req, res) => {
  //! 1) Development
  //* 1.1) API
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
    // 2.1.1) Operational error
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    // 2.1.2) Programing error
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

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    resErrorDev(err, req, res);
  }

  if (process.env.NODE_ENV === "production") {
    resErrorProd(err, req, res);
  }
};

module.exports = errorController;
