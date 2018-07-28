"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var Response = {
    crc_token_missing: {
        statusCode: 400,
        body: JSON.stringify({
            success: false,
            message: 'Request must include a "crc_token"'
        })
    }
};
exports.crc = function (event, context, cb) {
    if (!event.body) {
        return cb(null, Response.crc_token_missing);
    }
    var crc_token = JSON.parse(event.body).crc_token;
    var consumer_secret = process.env.TWITTER_CONSUMER_SECRET;
    if (!crc_token) {
        return cb(null, Response.crc_token_missing);
    }
    else {
        var hmac = crypto_1.createHmac('sha256', consumer_secret).update(crc_token).digest('base64');
        var response = {
            statusCode: 200,
            body: JSON.stringify({
                response_token: "sha256=" + hmac
            }),
        };
        return cb(null, response);
    }
};
//# sourceMappingURL=crc.js.map