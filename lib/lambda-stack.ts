import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LambdaStack extends Stack {
  public readonly lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.lambdaFunction = new lambda.Function(this, 'SampleHelloHandler', {
      runtime: lambda.Runtime.RUBY_2_7,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.lambda_handler',
      functionName: 'hello',
    });
  }
}
