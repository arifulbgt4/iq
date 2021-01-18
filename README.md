<h1 align="center">IQ</h1>

## Installing:

To get the app installing locally:

- Clone this repo

Given command
`yarn install` or `npm install`
from the root to install all required dependencies.

## Env setup:

Create a `.env` file on the project root and copy the variables from `.env.example`

## Development Instructions::

Install global packages if need,

```
npm i -g yarn dotenv-cli lerna
```

## Services

```sh
dotenv -e .env yarn build:api
dotenv -e .env yarn start:api
dotenv -e .env yarn dev:client
dotenv -e .env yarn run dev # To run both backend and dashboard

The client is at https://localhost:3000
The api is at https://localhost:4000
```

## Deployment

When you will build then set the env variables `REACT_BACKEND_PROD_API=http://localhost:4000` and dev backend api set empty `REACT_APP_BACKEND_DEV_API=`

```sh
dotenv -e .env yarn build  # to build both backend and dashboard
dotenv -e .env yarn start  # to start both backend and dashboard

The client is at https://localhost:3000
The api is at https://localhost:3000/api
```

## Check Linting

`yarn run lint` or `npm run lint`

You will most likely see some errors. You can fix some of these errors by simply re-running the same command with the —-fix option. I would recommend not using the fix option until you have had a chance to look at the code that is causing the errors. That will give you a better understanding of why you are seeing the errors. Also, you may need to adjust some of the rules based on your preferences.

---

**Thanks for reading**
