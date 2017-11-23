module.exports = (err, req, res, next) => {
    
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    const status = err.status || 500;
    const errorResponse = { status: 'ERROR', code: status, message: err.message };

    // replace with logging middleware of some sort (Winston?)
    if (status === 500) {
        console.error(err);
    }

    if (err.errors) {
        errorResponse.errors = err.errors;
    }
    res.status(status);
    res.send(errorResponse);
}