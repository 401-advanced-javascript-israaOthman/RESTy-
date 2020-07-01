
import React from 'react';
import ReactView from 'react-json-view';
import './loader.scss';


const Result = (props) => {
    return (
        <div className={`loading-${props.loading}  output `} >
            <ReactView src={props.results} />
        </div>
    );
}
export default Result;
