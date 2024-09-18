import { useRef } from "react"

const Button = ({ ref,...props })=>{
    return <button ref={ref} {...props}/>}

const App = ()=>{
    const buttonRef = useRef<HTMLButtonElement>(null)
    return (
        <Button ref={buttonRef}>按钮</Button>
     )
}
export default App