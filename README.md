# serverless-aws-typescript-jest
Boiler template to build AWS Lambda with Typescript. Unit tests use Jest.

Technologies used
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [serverless](https://github.com/serverless/serverless)
- [serverless-plugin-webpack](https://github.com/goldwasserexchange/serverless-plugin-webpack)
- [jest](https://github.com/facebook/jest)

# Dependencies
You need the serverless framework to deploy and build
```
npm install -g serverless
```

# Setup
Clone the repository and install the packages.
```
git clone https://github.com/purini-to/serverless-aws-typescript-jest
cd serverless-aws-typescript-jest
```
use npm or yarn
```
# npm
npm install
# yarn
yarn
```

# Test
Unit tests with Jest
```
npm test
```

Serverless local invoke
```
serverless invoke local -f hello -l -p functions/hello/__tests__/__data__/event_s3_put.json
```

# Deploy
```
serverless deploy -v
```
