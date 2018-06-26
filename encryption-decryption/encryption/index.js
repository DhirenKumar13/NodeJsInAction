'Use strict';
const crypto = require('crypto');

module.exports = function(key) {
    this.key = key;
    return {
        encrypt : (anyStringHere) => {
            let encoder = crypto.createCipher('aes-256-ctr', this.key);
            return encoder.update(anyStringHere, 'utf8', 'hex');
        },
        decrypt : (encryptedStringHere) => {
            let decoder = crypto.createDecipher('aes-256-ctr', this.key);
            return decoder.update(encryptedStringHere, 'hex', 'utf8');
        }
    }
}