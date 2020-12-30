# openapigenerator-client-server-tutorial

## openapi-generator-cli reference

https://openapi-generator.tech/

## Install node.js for npm

https://nodejs.org/en/

## Install golang

https://golang.org/

## Install globally openapi-generator-cli

https://www.npmjs.com/package/@openapitools/openapi-generator-cli

`npm install -g @openapitools/openapi-generator-cli`

## Install globally Angular CLI

`npm install -g @angular/cli`

## Create OpenAPI schema

schema.yml

## Generate Backend via openapi-generator-cli

`openapi-generator-cli generate --additional-properties=featureCORS=true -i ./schema.yaml -g go-server -o ./user-service`

## Generate Frontend Project via Angular CLI

`ng new user-frontend`

## Generate Frontend Client openapi-generator-cli

`openapi-generator-cli generate -g typescript-angular -i ./schema.yaml -o ./user-frontend/openapi`

## Develop Backend and Frontend