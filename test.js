import React from 'react';
//import My from './index.jsx';
import enzyme from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
//import { mountWithIntl, shallowWithIntl } from 'enzyme-react-intl';

describe('<My />', () => {
	
	const initialComponentState = {
		email: 'joe@tidee.com'
	};
	
	// Check correct local default state exists.
	it('initial state is correct', () => {
		//const wrapper = mountWithIntl(<My />);
		//expect(wrapper.state()).to.deep.equal(initialComponentState);
	});
	
});
