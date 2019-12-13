'use strict';

const { twilioConfig } = require('../config');

const client = require('twilio')(twilioConfig.accountSid, twilioConfig.authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;


export const sendMessage = function(phoneNumber, message) {

    return client.messages
        .create({
            body: message,
            from: twilioConfig.number,
            to: phoneNumber
        });
};

export const getMessageResponse = (message = "Thank you for your confirmation!") => {
    const twiml = new MessagingResponse();
    twiml.message(message);

    return twiml.toString();
}

