import React, { useState } from 'react'
import CounterView from './counter.view'

const CounterContainer = () => {

    const [counter, setCounter] = useState(0)

    const add = () => {
        setCounter(counter + 1)
    }

    const remove = () => {
        if (counter) setCounter(counter - 1)
    }

    return (
        <CounterView
            counter={counter}
            add={() => add()}
            remove={() => remove()}
        />
    )

}

export default CounterContainer