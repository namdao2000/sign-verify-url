declare const SECRET_KEY: string;
export const Encoder = new TextEncoder()
export const SecretKeyData = Encoder.encode(SECRET_KEY)
export const ExpirationMs = 864000 // 1 Day