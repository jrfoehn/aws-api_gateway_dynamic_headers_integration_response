# API Gateway Dynamic Headers with Integration Responses

Lead Maintainer: [Jean-Robin Foehn](mailto:fjeanrob@amazon.com)

## 📋 Table of content

- [Installation](#-install)
- [Metrics](#-metrics)
- [Pre-requisites](#-pre-requisites)
- [Description](#-description)
- [Usage](#-usage)
- [See also](#-see-also)

## 🚀 Install

Add here the procedure to install all the dependencies or setup commands.
Use Markdown or Asciidoc syntax to highlight shell command or configuration files.

```bash
cd infrastructure
npm install 
cdk deploy DemoDynamicHeaders
```

## 📊 Metrics

The below metrics displays approximate values associated with deploying and using this block.

Metric | Value
------ | ------
**Type** | Demonstration
**Installation Time** | 2 minutes
**Run Time** | 10 minutes
**Audience** | Developers, Solutions Architects

## 🎒 Pre-requisites

List here your project pre-requisites
- AWS CDK v1.124.0
- Node v14.17

## 🔰 Description

This demo shows how you can pass return values from a Lambda Function to API Gateway's respone headers through the use of Method & Integration Response.  
The API Gateway returns a custom header (```x-custom-header```) with the current date & time as a value

### Running the demo (optional)

Run the following:
```bash
curl -v GET 'https://<YOUR_API_ID>.execute-api.eu-west-1.amazonaws.com/dev/'
```
The results should look like this:
```bash
HTTP/2 200 
date: Thu, 30 Sep 2021 10:16:40 GMT
content-type: application/json
content-length: 124
x-amzn-requestid: 091e72fc-7558-4513-88f8-d30a56442eb9
x-amz-apigw-id: GeM1SH4vjoEFXOg=
x-custom-header: 30/9/2021 10:16:40
x-amzn-trace-id: Root=1-61558e88-2f8ec4cd534b128621ca7f9f;Sampled=0

{"statusCode":200,"headers":{"custom":"30/9/2021 10:16:40"},"body":"{\"message\":\"Good day, you of World.\",\"input\":{}}"}
```
## 👀 See also


- [Set up request and response data mappings using the API Gateway console](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings-execution-console.html)
- [API Gateway mapping template and access logging variable reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#input-variable-reference)
