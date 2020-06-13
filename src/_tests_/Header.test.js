import React from 'react';
import Header from '../components/Header.js';

import {render} from 'enzyme';

describe('Header renders as expected', () => {
    it('creates a header element', () => {
        let component = render(<Header />);
        expect(component.find('header')).toBeDefined();
    });
})