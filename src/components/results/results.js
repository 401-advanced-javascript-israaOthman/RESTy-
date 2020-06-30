
import React from 'react';
import ReactView from 'react-json-view';


const Result = (props) => {
    return (
        <section className="results">
            <span className="count">{props.count}</span>
            <span className="headers"><ReactView name='Headers' src={props.Header}/></span>
            <span className="result"><ReactView name='Response' src={props.results}/></span>
        </section>
    );
}
export default Result;
