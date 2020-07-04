
import React from 'react';
import ReactView from 'react-json-view';
import { If, Then, Else } from '../if/if'
import './loader.scss';


const Result = (props) => {
    return (
        <>
            <If condition={!props.loading}>
                <Then>
                    <div id="output">
                        <ReactView src={props.results} />
                    </div>
                </Then>
                <Else>
                    <img src="https://thumbs.gfycat.com/SpryNegligibleLeafcutterant-size_restricted.gif"></img>
                </Else>
            </If>
        </>
    );
}
export default Result;
