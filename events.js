////// // lesson30
// const EventEmitter = require('events')
// const celebrity = new EventEmitter()

// Subscribe to celebrity for Observer 1
// With function keyword
// celebrity.on('race win', function () {
// 	console.log('Congratulations! You are the best!')
// })

// || Arrow Syntax
// celebrity.on('race win', () => {
// 	console.log('Congratulations! You are the best!')
// })

const EventEmitter = require('events')
const celebrity = new EventEmitter()

// Subscribe to celebrity for Observer 1
celebrity.on('race', (result) => {
	if (result === 'win') {
		console.log('Congratulations! You are the best!')
	}
})

// Subscribe to celebrity for  Observer 2
celebrity.on('race', (result) => {
	if (result === 'win') {
		console.log('Boo I could have better than that!')
	}
})

process.on('beforeExit', (code) => {
	console.log('Process beforeExit event with code: ', code)
})

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')
