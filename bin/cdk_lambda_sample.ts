#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { LambdaStack } from '../lib/lambda-stack';
import { ApigatewayStack } from '../lib/apigateway-stack';

const app = new cdk.App();

const lambdaStack = new LambdaStack(app, 'sample-lambda', {});
const apigatewayStack = new ApigatewayStack(
  app,
  'sample-apigateway',
  lambdaStack.lambdaFunction,
  {}
);

apigatewayStack.addDependency(lambdaStack);
