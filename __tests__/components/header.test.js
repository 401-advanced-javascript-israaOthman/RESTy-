import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});

import Header from '../../src/components/header/index';

describe('<Header/>', ()=> {
    it('Is the header exsits ?', () =>{
        let head = shallow(<Header/>);
        expect(head.find('h1').exists()).toBeTruthy();
    });
})
