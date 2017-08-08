import {Meteor} from 'meteor/meteor'
import expect from 'expect';
import {validateNewUser} from './users';

if(Meteor.isServer) {
	describe('validate users', function() {
		it('should allow valid email address', function() {
			const testUser = {
				emails:[{
					address: 'nick@test.com'
				}]
			};
			const user = validateNewUser(testUser);
			expect(user).toBe(true);
		});
		it('should not allow an invalid email address', function() {
			const testUser = {
				emails:[{
					address: 'testing'
				}]
			};
			expect(() => {
				validateNewUser(testUser);
			}).toThrow();
		});
	});
}


// const add = (a,b) => {
// 	if(typeof b !== 'number') {
// 		return a + a;
// 	}
// 	return a + b;
// };

// const square = (num) => num*num;

// describe('add numbers', function() {
// 	it('should add two numbers', function() {
// 		const res = add(5,10);
// 		expect(res).toBe(15);
// 	});

// 	it('should double a single number', function() {
// 		const res = add(20);
// 		expect(res).toBe(40);
// 	});
// });

// describe('square numbers', function() {
// 	it('should return a squared number', function() {
// 		const res = square(12);
// 		expect(res).toBe(144);
// 	});
// });