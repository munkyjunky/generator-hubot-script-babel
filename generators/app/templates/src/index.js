'use strict';

module.exports = (robot) => {

	robot.hear(/badger/i, (res)=> {
		res.send('Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS!');
	});

};
