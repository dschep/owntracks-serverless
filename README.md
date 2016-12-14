# Serverless OwnTracks HTTP Backend
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This is a implementation of the [OwnTracks](http://owntracks.org/)
[HTTP](http://owntracks.org/booklet/tech/http/) backend on AWS Lambda using
[serverless](http://serverless.com).

It currently only implements saving locations to DynamoDB.

## Quickstart
```
# edit serverless.yml to set env vars
npm install
sls deploy
```
