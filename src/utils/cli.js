const EMOJI_REGEX = require('emoji-regex')();

let BOX = {
	TOP_LEFT: '╭',
	TOP_RIGHT: '╮',
	BOTTOM_LEFT: '╰',
	BOTTOM_RIGHT: '╯',
	TOP: '─', BOTTOM: '─', LEFT: '│', RIGHT: '│',
	PAD_X: 1
};

const suffix = (message, char = ' ', count = 1) => {
	return message + Array(count).fill(char).join('');
};

const prefix = (message, char = ' ', count = 1) => {
	return Array(count).fill(char).join('') + message;
};

const emojiLength = (str) => {
	let match, emojiLength = 0;
	// eslint-disable-next-line no-cond-assign
	while (match = EMOJI_REGEX.exec(str)) {
		const emoji = match[0];
		switch (emoji) {
			case '⏫': emojiLength += 1; break;
			default: emojiLength += [...emoji].length - 1;
		}
	}
	return emojiLength;
};

const box = ({ message }) => {

	let messages = message.split('\n');
	let length = Math.max(...messages.map(message => message.length)) + 1;
	let HORIZONTAL = Array(length + 1).fill(BOX.TOP).join('');

	console.log(`${BOX.TOP_LEFT}${HORIZONTAL}${BOX.TOP_RIGHT}`.green);

	messages = messages.map(message => {
		let shortage = length - message.length;
		let padLength = Math.ceil(shortage / 2, 10);
		message = suffix(message, ' ', padLength);
		message = prefix(message, ' ', padLength);
		return message;
	});

	messages.map(message => {
		let offset = emojiLength(message);
		let prefixPad = Math.ceil(offset / 2);
		let suffixPad = Math.floor(offset / 2) * -1;
		message = prefixPad ? message.slice(prefixPad) : message;
		message = suffixPad ? message.slice(0, suffixPad) : message;
		console.log(`${BOX.LEFT.green}${message}${BOX.RIGHT.green}`);
		return message;
	});
	console.log(`${BOX.BOTTOM_LEFT}${HORIZONTAL}${BOX.BOTTOM_RIGHT}`.green);
};

module.exports = {
	box
};
