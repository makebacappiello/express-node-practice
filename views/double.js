module.exports = (req, res, next) => {
  if (req.body.number === undefined) {
    return next();
  }
  const num = parseFloat(req.body.number);
  if (isNaN(num)) {
    const err = new Error("Please use only numbers");
    return next(err);
  }
  const result = num * 2;
  req.doubled = result;
  next();
};
