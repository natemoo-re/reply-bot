"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listen = function (event, context, cb) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }),
    };
    cb(null, response);
};
//# sourceMappingURL=listen.js.map