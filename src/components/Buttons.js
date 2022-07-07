import React from 'react';
import { useDispatch } from 'react-redux';
import { increase,decrease } from '../store/actions/counter'

function Buttons() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrease())}>-</button>
            <button onClick={() => dispatch(increase())}>+</button>
        </div>
    )
}

export default Buttons
