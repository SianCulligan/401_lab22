import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';


describe ('Snapshot test for the full app', () => {
    it('matches the snapshot', () => {
        const currentHTML = renderer.create(<App/>).toJSON();
        console.log(currentHTML);
        expect(currentHTML).toMatchSnapshot();
    });
});