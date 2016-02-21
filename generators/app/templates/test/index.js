'use strict';

const Helper = require('hubot-test-helper');
const expect = require('chai').expect;
const http = require('http');

const helper = new Helper('../src/index.js'); // path to file you want to test

describe('hubot', () => {

	let room;

	beforeEach(() => room = helper.createRoom());
	afterEach(() => room.destroy());

	it('should respond when hearing talk of badgers', done => {

		room.user.say('alice', 'what exactly is a badger anyways').then(() =>{

			expect(room.messages).to.eql([
				['alice', 'what exactly is a badger anyways'],
				['hubot', 'Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS!']
			]);

			done();

		});

	});

});
