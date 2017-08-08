import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {PrivateHeader} from './PrivateHeader';

if(Meteor.isClient) {
	describe('PrivateHeader', function() {
		it('should set button text to logout', function() {
			const wrapper = mount(<PrivateHeader handleLogout={() => {}} title="Test Title" />);
			const buttonText = wrapper.find('button').text();
			expect(buttonText).toBe('Logout');
		});
		it('should use title prop as h1 text', function() {
			const title = 'Test title here';
			const wrapper = mount(<PrivateHeader handleLogout={() => {}} title={title} />);
			const headingTitle = wrapper.find('h1').text();
			expect(headingTitle).toBe(title);
		});
		// it('should call the function', function() {
		// 	const spy = expect.createSpy();
		// 	const args = [1,2,3,4];
		// 	spy(...args);
		// 	spy('Nick');
		// 	expect(spy).toHaveBeenCalledWith(...args);
		// });
		it('should call handleLogout on click', function() {
			const spy = expect.createSpy();
			const wrapper = mount(<PrivateHeader title="Title" handleLogout={spy} />);
			wrapper.find('button').simulate('click');
			expect(spy).toHaveBeenCalled();
		});
	});
}