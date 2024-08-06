function notFound(req, res, next) {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
}


function catchErrors(controllerMethod) {
    return async function (req, res, next) {
        try {
            await controllerMethod(req, res, next);
        } catch (error) {
            next(error);
        }
    };
}

function errorHandler(error, req, res, next) {
    let status = 500;

    if (error.status) {
        status = error.status;
    }

    res.status(status).render('error', {
        error: error.message,
        stack: error.stack,
        status: status,
    });
}

module.exports = { catchErrors, notFound, errorHandler };