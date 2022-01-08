import { Encoder, SecretKeyData } from './constants'
import { byteStringToUint8Array } from './byte-string-to-uint8array'

export const verifySignedUrl = async (signedUrl: string): Promise<boolean> => {
  console.log(signedUrl)
  const url = new URL(signedUrl)

  const key = await crypto.subtle.importKey(
    'raw',
    SecretKeyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  )

  // Extract the query parameters we need and run the HMAC algorithm on the
  // parts of the request we are authenticating: the path and the expiration
  // timestamp.
  const expiry = Number(url.searchParams.get('expiry'))
  const dataToAuthenticate = url.pathname + expiry

  // The received MAC is Base64-encoded, so we have to go to some trouble to
  // get it into a buffer type that crypto.subtle.verify() can read.
  const receivedMacBase64 = url.searchParams.get('mac') as string
  const receivedMac = byteStringToUint8Array(atob(receivedMacBase64))

  // Use crypto.subtle.verify() to guard against timing attacks. Since HMACs use
  // symmetric keys, we could implement this by calling crypto.subtle.sign() and
  // then doing a string comparison -- this is insecure, as string comparisons
  // bail out on the first mismatch, which leaks information to potential
  // attackers.
  return await crypto.subtle.verify(
    'HMAC',
    key,
    receivedMac,
    Encoder.encode(dataToAuthenticate),
  )
}