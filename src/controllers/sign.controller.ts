import { ServerRequest } from 'worktop/request'
import { ServerResponse } from 'worktop/response'
import { signUrl } from '../utils/sign-url'

export const signController = async (req: ServerRequest, res: ServerResponse): Promise<void> => {
  const requestedUrl = req.params.unsignedUrl
  if (!requestedUrl) res.send(404, 'Missing the url parameter')
  const signedUrl = await signUrl(req.origin + `/verify/${requestedUrl}`)
  res.send(200, signedUrl);
}