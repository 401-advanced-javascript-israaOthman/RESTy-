
import React from 'react';
import ReactView from 'react-json-view';
import './loader.scss';


const Result = (props) => {
    return (
        <>
        <img src="https://lh3.googleusercontent.com/proxy/4ngyKPVDFRyA9LylGP8K-T-XzH2iZJAVHDccTvayO3REGoGEZTAnA-akIeDNIK5KpdLd0sgltbHKO79mUBA" className={`loading-${props.loading}`}></img>
        <div className={`loading-${!props.loading}`}  id="output">
            <ReactView src={props.results} />
        </div>
        </>
    );
}
export default Result;
