import React from 'react';
import expect from 'expect';
import {Meteor} from 'meteor/meteor';
import {mount} from 'enzyme';
import NoteListItem from './NoteListItem';

if(Meteor.isClient) {
	describe('NoteListItem', function() {
		it('should render title and timestamp', function() {
			const title = 'This is a title';
			const updatedAt = 1502218321873;
			const wrapper = mount(<NoteListItem note={{title, updatedAt}} />);
			expect(wrapper.find('h5').text()).toBe(title);
			expect(wrapper.find('p').text()).toBe('8/08/17');
		});
		it('should render untitled note and timestamp', function() {
			const updatedAt = 1502218321873;
			const wrapper = mount(<NoteListItem note={{title:'', updatedAt}}/>);
			expect(wrapper.find('h5').text()).toBe('Untitled Note');
		});
	});
}