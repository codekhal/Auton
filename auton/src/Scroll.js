import React from 'react';  

const Scroll = (props) => {
    return (
        <div style = {{overflow: 'scroll', border: '7px solid black', height: '700px'}}> 
            {props.chidren}
        </div>
    );
};

export default Scroll;