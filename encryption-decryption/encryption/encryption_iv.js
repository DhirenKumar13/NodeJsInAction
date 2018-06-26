'Use strict';
const crypto = require('crypto');

module.exports = function(key) {
    this.key = key;
    return {
        encrypt : (anyStringHere) => {
            const iv= crypto.pbkdf2Sync(this.key,crypto.randomBytes(16),10000,16,'sha512');
            const key = Buffer.from(this.key, 'binary');
            let encoder = crypto.createCipheriv("aes-256-ctr", key, iv);
            return encoder.update(anyStringHere, 'utf8', 'base64');
        },
        decrypt : (encryptedStringHere) => {
            console.log(encryptedStringHere);
            const iv= Buffer.from(encryptedStringHere, 'base64');
            const key = Buffer.from(this.key, 'binary');
            let decipher = crypto.createDecipheriv("aes-256-ctr", key, iv);
            let decryptedText = decoder.update(encryptedStringHere, 'base64');
            decodedText += decipher.final();
        }
    }
}