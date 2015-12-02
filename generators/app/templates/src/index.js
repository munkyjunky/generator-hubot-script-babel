'use strict';

module.exports = (robot) => {

    robot.hear(/hello/i, (res)=> {
        res.send('it\'s working!');
    });

};