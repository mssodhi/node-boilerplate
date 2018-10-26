const services = require('./service');

module.exports = (req, res, next) => {
  const { type, action, payload } = req.body;
  return services[type][action](payload).then(
    results => res.send(results),
    next
  );
};
