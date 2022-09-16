// Require the package
const QRCode = require('qrcode')

// Creating the data
let data = 'fahad'

// Converting the data into String format
let stringdata = JSON.stringify(data)

// Print the QR code to terminal
QRCode.toDataURL(data,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
    
})

// Converting the data into base64
QRCode.toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	console.log(code)
})
