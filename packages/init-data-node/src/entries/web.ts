import { InitData, InitDataParsed } from '@telegram-apps/sdk';

import { hashToken as baseHashToken } from '../hashToken.js';
import { sign as baseSign, SignOptions } from '../sign.js';
import { signData as baseSignData, SignDataOptions } from '../signData.js';
import { validate as baseValidate } from '../validate.js';
import type{ ValidateOptions } from '../validate.js';
import type { CreateHmacFn, SignData, Text } from '../types.js';

const createHmac: CreateHmacFn<true> = async (data, key) => {
  const encoder = new TextEncoder();

  return Buffer.from(
    await crypto.subtle.sign(
      'HMAC',
      await crypto.subtle.importKey(
        'raw',
        typeof key === 'string' ? encoder.encode(key) : key,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign', 'verify'],
      ),
      encoder.encode(data.toString()),
    ),
  );
};


/**
 * Hashes specified token using a string, expected during init data sign.
 * @param token - token to hash.
 */
export function hashToken(token: Text): Promise<Buffer> {
  return baseHashToken(token, createHmac);
}

/**
 * Signs specified init data.
 * @param data - init data to sign.
 * @param authDate - date, when this init data should be signed.
 * @param key - private key.
 * @param options - additional options.
 * @returns Signed init data presented as query parameters.
 */
export function sign(
  data: SignData,
  key: Text,
  authDate: Date,
  options?: SignOptions
): Promise<string> {
  return baseSign(data, key, authDate, signData, options);
}

/**
 * Signs specified data with the passed token.
 * @param data - data to sign.
 * @param key - private key.
 * @param options - additional options.
 * @returns Data sign.
 */
export async function signData(data: Text, key: Text, options?: SignDataOptions): Promise<string> {
  return baseSignData(data, key, createHmac, options);
}

/**
 * Validates passed init data.
 * @param value - value to check.
 * @param token - bot secret token.
 * @param options - additional validation options.
 * @throws {TypeError} "auth_date" should present integer
 * @throws {Error} "hash" is empty or not found
 * @throws {Error} "auth_date" is empty or not found
 * @throws {Error} Init data expired
 */
export async function validate(
  value: InitData | InitDataParsed | string | URLSearchParams,
  token: Text,
  options?: ValidateOptions,
): Promise<void> {
  return baseValidate(value, token, signData, options);
}

export * from './shared.js';
