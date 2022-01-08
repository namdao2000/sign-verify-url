import { Encoder, ExpirationMs, SecretKeyData } from './constants'

export const signUrl = async (url: string): Promise<string> => {
  const urlObject = new URL(url);
  const key = await crypto.subtle.importKey(
    'raw',
    SecretKeyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )

  const expiry = Date.now() + ExpirationMs
  const dataToAuthenticate = urlObject.pathname + expiry

  const mac = await crypto.subtle.sign('HMAC', key, Encoder.encode(dataToAuthenticate))

  // `mac` is an ArrayBuffer, so we need to jump through a couple of hoops to get
  // it into a ByteString, and then a Base64-encoded string.
  const base64Mac = btoa(String.fromCharCode(...new Uint8Array(mac)))

  urlObject.searchParams.set('mac', base64Mac)
  urlObject.searchParams.set('expiry', String(expiry))

  return urlObject.href
}