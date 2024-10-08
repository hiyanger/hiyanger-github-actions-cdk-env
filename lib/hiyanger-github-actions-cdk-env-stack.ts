import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

// 環境を定義するインターフェース
export interface EnvProps extends cdk.StackProps {
  envName: string;
}

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: EnvProps) {
    super(scope, id, props);

    // S3バケットの作成
    new s3.Bucket(this, 'MyBucket', {
      bucketName: `${props.envName}-my-unique-bucket-name-hiyanger-xx`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}
