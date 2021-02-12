import { fibonacciValidation } from '../model/fibonacciModel';

export default (req, res, next) => {
  const index = req.params.index;
  const validation = fibonacciValidation.validate(index);
  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }
  next();
};
