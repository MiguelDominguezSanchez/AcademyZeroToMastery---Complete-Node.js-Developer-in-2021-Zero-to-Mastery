const path = require('path')
// /folders/files.jpg /folder/files.jpg

function getMessages(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public', 'rioparmountain.jpg'))
	// res.send('<ul><li>Hello Albert!</li></ul>')
}

function postMessage(req, res) {
	console.log('Updating messages...')
}

module.exports = {
	getMessages,
	postMessage,
}
