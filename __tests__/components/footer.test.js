import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../../src/components/footer/index.js';

describe('<Footer/>', ()=> {
    it('Is the header exsits ?', () =>{
        let app = shallow(<Footer/>);
        expect(app.find('footer').exists()).toBeTruthy();
    });
});
