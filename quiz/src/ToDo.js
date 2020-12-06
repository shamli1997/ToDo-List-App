import React from 'react';

const ToDo = (props) => {


    return (
        <>
            <div className='todo_style'>
                <button onClick={() => {
                    props.onSelect(props.id);
                }}>X
                <li key={props.pos}>{props.item}</li>
                </button>
            </div>
        </>
    )

};

export default ToDo