
import React from 'react';
import ReactView from 'react-json-view';


const Result = (props) => {
    return (

<ReactView theme="monokai" src={props.results}/>

    );
}
export default Result;
