import * as cdk from '@aws-cdk/core';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const func = new lambda.Function(this, "SampleFunction", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: new lambda.AssetCode("../src"),
      handler: "index.handler",
    });

    const api = new apigw.RestApi(this, "DynamicHeadersAPI", {
      description: "example api gateway with dynamic headers from lambda",
      deployOptions: {
        stageName: "dev",
      },
      endpointTypes: [apigw.EndpointType.REGIONAL]
    })

    api.root.addMethod(
        'ANY',
        new apigw.LambdaIntegration(func, {
          proxy: false,
          integrationResponses:[{
            statusCode: "200",
            responseParameters: {
              "method.response.header.x-custom-header": "integration.response.body.headers.custom"
            }
          }]
        }),
        {
          methodResponses: [{
            statusCode: "200",
            responseParameters: {
              "method.response.header.x-custom-header": true
            }
          }],
        }
    );

  }
}
