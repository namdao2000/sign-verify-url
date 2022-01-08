# Description
This is a demo for building endpoints that can sign and verify a url request using HMAC and SHA-256 Algorithms. 
Powered by [Worktop's Router](https://github.com/lukeed/worktop) and the cryptographic interface [Web Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).

Built using this [example doc](https://developers.cloudflare.com/workers/examples/signing-requests) on Cloudflare Docs.

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

#### MIT LICENSE

Copyright (c) Nam Dao

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.