import React from 'react'

export default function Counter({ start }) {
    
    const [count, setCount] = React.useState(start);

    function increaseCounter() {
        setCount(count + 1);
    }
    
    return (
        <>
        <h2>Teller: {count}</h2>
        <button onClick={increaseCounter}>Pluss</button>

        </>
    )
}