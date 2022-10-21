import React from 'react'
import './counter.style.css'

const CounterView = (props) => {

    return (
        <div>
            <div className='counter'>
                {props.counter}
            </div>

            <div>
                <button className='button' onClick={() => props.remove()}>-</button>
                <button className='button' onClick={() => props.add()}>+</button>
            </div>
        </div>
    )

}

export default CounterView