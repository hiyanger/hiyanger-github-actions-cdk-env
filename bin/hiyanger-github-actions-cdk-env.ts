#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyStack } from '../lib/hiyanger-github-actions-cdk-env-stack';

const app = new cdk.App();

// 開発環境のスタック
new MyStack(app, 'DevOtsukareStack', {
  envName: 'dev',
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  },
});

// 本番環境のスタック
new MyStack(app, 'ProdOtsukareStack', {
  envName: 'prd',
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  },
});

app.synth();