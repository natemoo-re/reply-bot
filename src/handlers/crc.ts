import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { createHmac } from 'crypto';

const Response = {
    crc_token_missing: {
        statusCode: 400,
        body: JSON.stringify({
            success: false,
            message: 'Request must include a "crc_token"'
        })
    }
}

export const crc: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    if (!event.body) {
        cb(null, Response.crc_token_missing);
        return;
    }
    const { crc_token } = JSON.parse(event.body);
    const consumer_secret = process.env.TWITTER_CONSUMER_SECRET;
    
    if (!crc_token) {
        cb(null, Response.crc_token_missing);
        return;
    } else {
        const hmac = createHmac('sha256', consumer_secret).update(crc_token).digest('base64');

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                response_token: "sha256=" + hmac
            }),
        };

        return cb(null, response);
    }
}
