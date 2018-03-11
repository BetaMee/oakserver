import crypto from 'crypto'

import {
  CRYPTO_SECRET
} from '../config/secret'



const encryptPassword= (password) => {
  return crypto
    .createHmac('sha256', CRYPTO_SECRET)
    .update(password)
    .digest('hex')
}

export {
  encryptPassword
}