import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { LogGroup } from 'aws-cdk-lib/aws-logs';

export class ApigatewayStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    lambdaFunction: lambda.Function,
    props?: StackProps
  ) {
    super(scope, id, props);

    const restApiLogAccessLogGroup = new LogGroup(
      this,
      'SampleRestApiAccessLogGroup',
      {
        logGroupName: `/aws/apigateway/hello-cdk-rest-api-access-log`,
        retention: 1,
        removalPolicy: RemovalPolicy.DESTROY,
      }
    );

    new apigw.LambdaRestApi(this, 'SampleEndpoint', {
      handler: lambdaFunction,
      deployOptions: {
        //実行ログの設定
        dataTraceEnabled: true,
        loggingLevel: apigw.MethodLoggingLevel.INFO,
        //アクセスログの設定
        accessLogDestination: new apigw.LogGroupLogDestination(
          restApiLogAccessLogGroup
        ),
        accessLogFormat: apigw.AccessLogFormat.clf(),
      },
    });
  }
}
