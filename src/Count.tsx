import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const doubleCount = count * 2
    const incerment = () => setCount((c: number) => c + 1)
    return <div>
        <div>count: {count}</div>
        <div>doubleCount: {doubleCount}</div>
        <button onClick={incerment}>+1</button>
    </div>
};
export default Count;