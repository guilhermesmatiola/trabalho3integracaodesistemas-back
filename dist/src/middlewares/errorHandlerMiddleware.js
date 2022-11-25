import { errorTypeToStatusCode, isAppError } from '../utils/errorUtils.js';
export function handleErrorsMiddleware(err, req, res, next) {
    console.log('Ops! An error occured!', err);
    if (isAppError(err)) {
        var statusCode = errorTypeToStatusCode(err.type);
        return res.status(statusCode).send(err.message);
    }
    res.sendStatus(500);
}
