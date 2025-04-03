import { useEffect, useState } from "react";
import "./CounterApp.css";
const CounterApp = () => {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState(true);
    useEffect(() => {
        console.log("useEffect is triggered")
    }, [counter]);

    const bgColor = backgroundColor ? "" : "bg2";


    const onIncrement = () => {
        setCount(count + 1)
    }
    const onDecrement = () => {
        setCounter(counter - 1)
        //setCount(count - 1)
    }
    let bg1 = "";
    let bg2 = "";

    const reset = () => {
        setCount(0);
        console.log(backgroundColor)
        setBackgroundColor(!backgroundColor);
        console.log(backgroundColor);
    }

    // if (count < 0) {
    //     console.log(count); 
    //     setCount(0);
    // }


    if (count >= 5) {
        bg1 = "bg1";
    }

    if (count === 5) {
        bg2 = "bg2";
    }

    return (
        <div className={bgColor}>
            <h1 className={bg1}>
                {count}
            </h1>
            <h1>
                {counter}
            </h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={reset}> Reset</button>
        </div>
    )
}

export default CounterApp;
