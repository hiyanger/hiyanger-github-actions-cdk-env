# 動作
## develop
developブランチへプルリク Devスタックでdiff

developブランチへマージ Devスタックでdeploy

リソース名はdev-XXX

## master
masterブランチへプルリク Devスタックでdiff

masterブランチへマージ Devスタックでdeploy

リソース名はprd-XXX

※参考

https://zenn.dev/hiyanger/scraps/0d0118b7d9847b

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
