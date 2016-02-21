'use strict';

module.exports = (robot) => {

	robot.hear(/badger/i, res => {
		res.send('Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS!');
	});

	robot.router.post('/test', (req, res) => {
		res.send('OK');
		robot.send('Received HTTP request');
	});

};
