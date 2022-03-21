const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().min(1).max(15).required(),
  surname: Joi.string().min(1).max(15).required(),
  email: Joi.string().email().lowercase().required(),
  pass: Joi.string().min(6).required(),
  confPass: Joi.ref("pass"),
});

module.exports = {
  schema,
};
