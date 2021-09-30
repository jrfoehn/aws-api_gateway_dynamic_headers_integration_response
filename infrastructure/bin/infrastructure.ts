#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
const environment = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "eu-west-1"
}
new InfrastructureStack(app, 'DemoDynamicHeaders', { env: environment });
