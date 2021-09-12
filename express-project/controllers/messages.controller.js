const { readdirSync } = require('fs')
const path = require('path')
// /folders/files.jpg /folder/files.jpg

function getMessages(req, res) {
	res.render('messages', {
		title: 'Messages to my Friends!',
		friend: 'Elon Musk',
	})
	// res.sendFile(
	// 	path.join(__dirname, '..', 'public', 'images', 'rioparmountain.jpg')
	// )
}

function postMessage(req, res) {
	console.log('Updating messages...')
}

module.exports = {
	getMessages,
	postMessage,
}
