import crypto from 'crypto'
const secret_variable = process.env.secret_variable

export const genarateSaltedString = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt, password) => {
    return crypto.Hmac('sha256', [salt, password].join('/')).update(secret_variable).digest('hex')
}
