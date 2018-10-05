'use strict';

import * as  uuid from 'uuid';
import {Dynamodb} from '../db/dynamodb';

export const create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.PARK_DYNAMODB_TABLE,
        Item: {
            ParkId: uuid.v1(),
            Name: data.Name,
            Pin: data.Pin,
            ResetTime: timestamp
        },
    };

    // write the todo to the database
    Dynamodb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t create the todo item.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
};