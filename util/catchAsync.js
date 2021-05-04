// util for controllers to skip try-catch pattern
const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

module.exports = catchAsync;
