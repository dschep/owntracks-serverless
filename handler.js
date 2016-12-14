'use strict';

const _ = require('lodash');
const AWS = require('aws-sdk');
const Promise = require('bluebird');
AWS.config.setPromisesDependency(Promise);
const docClient = Promise.promisifyAll(new AWS.DynamoDB.DocumentClient());

module.exports.pub = (event, context, callback) => {
  const item = _.pick(JSON.parse(event.body),
      ['acc', 'alt', 'batt', 'cog', 'desc', 'event', 'lat', 'lon', 'rad', 't',
      'tid', 'tst', 'vac', 'vel', 'p', 'conn']);

  docClient.putAsync({
    TableName: process.env.table,
    Item: item
  }).then(() => callback(null, {statusCode:200, body: '[]'}))
    .catch(() => callback(null, {statusCode:400, body: '[]'}));
};
