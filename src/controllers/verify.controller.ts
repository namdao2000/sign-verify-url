import { ServerRequest } from 'worktop/request'
import { ServerResponse } from 'worktop/response'
import { verifySignedUrl } from '../utils/verify-signed-url'

export const verifyController = async (req: ServerRequest, res: ServerResponse): Promise<void> => {
  if (!req.query.has('mac') || !req.query.has('expiry')) {
    res.send(400, 'Missing query parameters')
    return;
  }

  const result = await verifySignedUrl(req.url);

  if (result) {
    res.send(200, 'Valid url')
  }
  else {
    res.send(403, 'Invalid URL')
  }
}