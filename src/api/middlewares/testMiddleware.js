const logMiddleware1 = async (req, res) => res.sendStatus(401);

exports.defaults = logMiddleware1;
