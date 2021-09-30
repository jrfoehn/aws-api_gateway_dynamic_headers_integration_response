import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DemoApiGatewayDynamicHeaders from '../lib/demo-api_gateway_dynamic_headers-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DemoApiGatewayDynamicHeaders.DemoApiGatewayDynamicHeadersStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
