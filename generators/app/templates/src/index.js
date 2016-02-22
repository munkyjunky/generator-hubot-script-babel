'use strict';

module.exports = (robot) => {

	robot.hear(/badger/i, res => {
		res.send('Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS!');
	});

	robot.router.post('/test', (req, res) => {
		robot.send({ room: req.params.room }, `Received HTTP request: ${req.body.value}`);
		res.send('OK');
	});

};
