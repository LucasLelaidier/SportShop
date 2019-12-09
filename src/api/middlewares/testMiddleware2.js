const logMiddleware2 = async (req, res, next) => {
    console.log('middleware2');
    next();
};

exports.defaults = logMiddleware2;
