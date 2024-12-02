# amc.integration_api

NestJS app developed to achieve a seamless integration between an AWS S3 bucket (previously linked to an AMC instance), the Amazon ADS/Amazon Marketing Cloud API´s and a client tool such as PowerBi.

The purpose of this proyect is to grant a single access point from where one can execute project specific procedures without the need of accessing/using each service separately via a third party software.  

## Features

- Token generation and validation needed for using all functionalities inside the API.
- Content filtering and retrieval of an AWS S3 bucket. 
- Automated custom reports generation. 
- Access report´s related functionalities of the Amazon Ads/Amazon Marketing Cloud API´s without the need to manually handle their respective authorization methods. 
  

## Installation

This proyect requires [Node.js](https://nodejs.org/) v14+ to run.

Create a .env file inside the proyect´s folder to initialize the following variables using your own private data:
> Note: AWS parameters must be related to an S3 bucket linked to an AMC instance as well as to an IAM user with permissions to this bucket, ADS parameters must be related to an Amazon Ads developer account and an Advertising API approved client.

```sh
PORT = <Port where to load and raise the application>
AWS_BUCKET_NAME = <name of the S3 bucket>
AWS_BUCKET_REGION = <region of the S3 bucket>
AWS_ACCESS_KEY = <IAM user´s access key>
AWS_SECRET_KEY=  <IAM user´s secret access key>
SECRET = <Password of your choice used for signing/validating jsonwebtokens>
ADS_REFRESH_TOKEN = <Refresh token generated from the Amazon Ads auth API>
ADS_CLIENT_ID =  <Amazon Ads client id>
ADS_CLIENT_SECRET = <Amazon Ads client secret>
ADS_AUTH_API = https://api.amazon.com
ADS_AMC_API = https://advertising-api.amazon.com
ADS_AMC_INSTANCE= <AMC instance id>
```

Install the dependencies and start the server.

 * Development Environment
```sh
npm install
npm run start:dev 
```

* Production Environment
```sh
npm run build
npm run start:prod
```

By default the app will run in port http://localhost:3000/, so change this within the .env file if necessary.

## Authorization
Every HTTP request to the AMC Integration API must be made alongside a valid token which can be generated through one of its own endpoints, otherwise access to the API and the mayority of its functionalities will be denied returning the following response.

```sh
{
  "message": "JWTError",
  "error": "jwt must be provided",
  "statusCode": 409
}
```
### Token Generation

> Note: Since its purpose is to automate Power Bi's data retrieval proccess, a token generated through this API will have no expiration time so a good practice would be to generate and store a single token for all requests to be done.

To generate an access token, a POST call must be made to the `/auth` endpoint, either via [Postman] or through some other API tool, while containing a request´s body such as:

```sh
{
    "access_key" : <IAM user´s access key>,
    "secret_key" : <IAM user´s secret access key>
}
```
In case of a successful call the API will return a newly created token as response, otherwise it will return a variation of the following message depending on the missing value.
```sh
{
  "message": [
    "access_key should not be empty",
    "access_key must be a string",
    "secret_key should not be empty",
    "secret_key must be a string"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```
### Token Usage
To access the rest of the API´s functionalities the token needs to be sent alongside any request to the other endpoints in the form of a bearer token which can be easily achieved through [Postman]'s authorization tab.

```sh
Authorization: Bearer <generated_token>
```

The API´s middleware will require the token to be valid in 2 different ways, the first one being a valid JWT which won´t be a problem for a token generated through the `/auth` endpoint and the second one being created using valid AWS credentials which should match the ones declared as environment variables.

In case of not meeting the requirements, the API will return the following messages respectively. 

```sh
{
  "message": "JWTError",
  "error": "invalid signature",
  "statusCode": 409
}
```
```sh

{
  "message": "jwt signed with unauthorized credentials",
  "error": "Forbidden",
  "statusCode": 403
}
```

## Endpoints

### Auth
#### /api/auth

* Method: POST
* Token required: False
* Description: Generates an access token through valid AWS credentials which then will be used as the only authorization parameter needed for using the rest of the API´s functionalities.

More  info about this on the Authorization section.

### Reports
#### /api/reports
* Method: GET
* Token required: True
* Description: Obtains the metadata list of all content inside the S3 bucket linked to Amazon Marketing Cloud.

#### /api/reports/download?file={file_name}
* Method: GET
* Query Params: file_name
* Token required: True
* Description: Obtains the csv file´s data that matches the name of the file given as query parameter.

#### /api/reports/latest/{schedule_name}?month={month}&year={year}&week={week}
* Method: GET
* Path Params: schedule_name
* Query Params: month, year, week
* Token required: True
* Description: Obtains the most recent csv file´s data that matches the name of the file given as path parameter.
If given, month, year and week params will serve as extra conditionals to filter a report closest to the year, month and week specified instead of using the current date.

## Workflows
### /api/workflows
* Method: GET
* Token required: True
* Description: Obtains the sqlQuery and workflow_id of all workflows registered for this AMC´s instance. 

### /api/workflows/{workflowId}
* Method: GET
* Path Params: workflowId
* Token required: True
* Description: Obtains the sqlQuery and workflow_id of a workflow registered for this AMC´s instance that matches the given workflow_id.

### /api/workflows/
* Method: POST
* Token required: True
* Description: Registers a new workflow for this AMC´s instance by sending the body´s content to the Amazon Ads API.

### /api/workflows/{workflowId}
* Method: PUT
* Path Params: workflowId
* Token required: True
* Description: Updates an existing workflow for this AMC´s instance by sending the body´s content to the Amazon Ads API.

For more information see https://advertising.amazon.com/API/docs/en-us/amc-reporting#tag/Workflows

## Executions
### /api/executions/{execution_id}
* Method: GET
* Path Params: execution_id
* Token required: True
* Description: Retrieves all details of a workflow execution for this AMC´s instance that matches the given execution_id.

### /api/executions/
* Method: POST
* Token required: True
* Description: Creates a new workflow execution for this AMC´s instance by sending the body´s content to the Amazon Ads API.

For more information see https://advertising.amazon.com/API/docs/en-us/amc-reporting#tag/Workflow-executions

## Automated
### /api/automated/{workflow_id}?timeWindow={timeWindow}&update={update}

* Method: GET
* Path Params: workflow_id
* Query Params: timeWindow, update
* Token required: True
* Description: Obtains at the moment generated csv file´s data that matches the name of the file given as path parameter.
If given, timeWindow will define the number of previous months until current date from where the data will be retrieved by AMC; update will update the workflow´s SQL query stored in the API before running its execution.

## Documentation

For a more detailed view of the proyect as well as of all of its modules, controllers, services, and so on run the following command (having installed dependencies before hand).

```sh
npm run documentation:serve
```

## Development Team
omar.robledo1.danone.com

