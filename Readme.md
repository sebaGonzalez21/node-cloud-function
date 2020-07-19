## Run locally

You will need Node and `npm` installed locally in order to be able to run the app. First, install node dependencies

    npm install

To run the app

    node index.js

The Express app will now be running on port 5555 and can be accessed on http://localhost:5555. The following endpoints will be accessible:

    http://localhost:5555/users
    http://localhost:5555/users/{userId}

## Deploy to Google Cloud

To deploy to Google Cloud install the Google Cloud SDK on your machine and run `gcloud init` to authenticate and set the GCP project that you wish to deploy to.

To deploy run

    gcloud functions deploy <NAME> --runtime nodejs8 --trigger-http --entry-point app

Where `<NAME>` is the name that you wish to give the function. e.g. `first-function`.

## Deploy Cloud Function http
```
gcloud functions deploy myFunction --trigger-http --runtime=nodejs8
```
+ https://medium.com/@jsoverson/how-to-deploy-node-js-functions-to-google-cloud-8bba05e9c10a
+ https://www.npmjs.com/package/@google-cloud/functions-framework

## Simulate Local Environment http
+ npx @google-cloud/functions-framework --target=InputVariables

## Schemas Validations and Generators
+ https://www.npmjs.com/package/express-json-validator-middleware
+ https://extendsclass.com/json-schema-validator.html
+ https://github.com/JouzaLoL/express-json-validator-middleware
