# Description
This is a demo for building endpoints that can sign and verify a url request using HMAC and SHA-256 Algorithms. 
Powered by [Worktop's Router](https://github.com/lukeed/worktop) and the cryptographic interface [Web Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).

Built using this [example](https://developers.cloudflare.com/workers/examples/signing-requests) on Cloudflare Docs.

## Endpoints

#### GET /sign/:unsignedUrl
Takes in a url parameter and returns a signed version of the URL, ready to be verified by the `/verify` end point.
Expiry time is configurable.

#### GET /verify/:signedUrl
Takes in a signed url parameter and verifies its signature and expiry date.

## Running in development

1. Make sure you have `wrangler` and `nvm` installed. 
2. Run `nvm install` to install the correct Nodejs version.
3. Create a `.env` file and add `SECRET_KEY=YOUR SECRET KEY`
4. Run `npm run dev`

## Deploying to production
1. Make sure you have `wrangler` and `nvm` installed.
2. Run `nvm install` to install the correct Nodejs version.
3. Go to the Workers dashboard, create a new project called `sign-verify-url`
4. Run `wrangler secret put SECRET_KEY` and type in your secret key
5. Run `wrangler publish`

#### [MIT LICENSE](https://github.com/namdao2000/sign-verify-url/blob/master/LICENSE)