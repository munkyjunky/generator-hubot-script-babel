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

	it('should respond when receiving a HTTP call', function (done) {

		const value = 'a random test value!';

		const options = {
			hostname: 'localhost',
			port: 8080,
			path: '/test',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const req = http.request(options, (res) => {

			expect(res.statusCode).to.equal(200);

			expect(res.statusMessage).to.equal('OK');

			expect(room.messages).to.eql([
				['hubot', `Received HTTP request: ${value}`]
			]);

			done();

		});

		req.write(JSON.stringify({
			value: value
		}));

		req.end();

	});
});
