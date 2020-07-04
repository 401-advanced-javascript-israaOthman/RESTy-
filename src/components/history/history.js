import React from 'react';
import { render } from 'enzyme';
import { Link, NavLink } from 'react-router-dom';
import validateFormData from 'react-jsonschema-form/lib/validate';
import './history.scss';


const history = (props) => {
    let get = getStorage();

    const handleFiler = (e) =>{
        let get = getStorage();
        let fill = get[parseInt(e.target.id)];
        console.log('fill',fill)
        props.filler(fill);
    }

    if(get && get.length > 0){
        const result = get.map((val, idx) => {
            return (
                <li className="mm" key={idx}>
                    <span className={`method ${val.method}`}>{val.method}</span>
                    <span className="url">{val.url}</span>
                    {/* <span className="body">{val.body ? val.body : '...'}</span> */}
                    <NavLink to='/' id={idx}><button onClick={handleFiler} id={idx}>Re-Run</button></NavLink>
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



const getStorage = () => {
    let history = localStorage.getItem('history');
    if (history) {
        let result = JSON.parse(history);
        return result;
    }
}

export default history;