import React from 'react';
import { render } from 'enzyme';
import { Link, NavLink } from 'react-router-dom';
import validateFormData from 'react-jsonschema-form/lib/validate';
import './history.scss';

const history = () => {
    let get = getProduts();
    if(get.length > 0){
        const result = get.map((val, idx) => {
            return (
                <li className="mm" key={idx}>
                    <span className={`method ${val.method}`}>{val.method}</span>
                    <span className="url">{val.url}</span>
                    {/* <span className="body">{val.body ? val.body : '...'}</span> */}
                     <button><NavLink to='/'>Re-Run</NavLink></button>
                </li>
            );
        });
        return (
            <div className="list">
                {result}
            </div>
        );
    }else{
        return(
            <div>

            </div>
        )
    }
   
}


const getProduts = () => {
    let history = localStorage.getItem('history');
    if (history) {
        let result = JSON.parse(history);
        return result;
    }
}

export default history;