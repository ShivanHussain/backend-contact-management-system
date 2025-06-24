class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Duplicate key error (e.g. email already exists)
  if (err.code === 11000) {
    err.message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err.statusCode = 400;
  }

  // Validation error
  if (err.name === "ValidationError") {
    err.message = Object.values(err.errors)
      .map((value) => value.message)
      .join(", ");
    err.statusCode = 400;
  }

  // CastError (e.g. invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    err.message = `Invalid value for ${err.path}`;
    err.statusCode = 400;
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
