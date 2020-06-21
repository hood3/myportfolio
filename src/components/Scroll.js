import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow:'scroll',border:'5px solid black',width:'auto' ,height:'920px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;