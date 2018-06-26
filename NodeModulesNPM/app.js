'Use strict';

const qr = require('qr-image');
const fs = require('fs');

let encodedData = process.argv[2] || null;
let qrOutputFileName = process.argv[3] || null;

if(encodedData != null && qrOutputFileName != null){
    qr.image(encodedData, {
        type : 'png',
        size : 20
    }).pipe(fs.createWriteStream(qrOutputFileName));

    console.log('QR code generated successfully');
} else {
    console.log('Error creating QR Code ..');
}

// run as node qr <StringForGeneratingQR> <OutputFileName>