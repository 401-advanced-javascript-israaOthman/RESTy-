import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../../components/footer/index.js';

describe('<Footer/>', ()=> {
    it('Is the header exsits ?', () =>{
        let head = shallow(<Footer/>);
        expect(app.find('footer').exists()).toBeTruthy();
    });
});
