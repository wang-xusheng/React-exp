import { useState, useTransition } from "react"

async function send(message:string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {message, sending: false, code: Math.random() > 0.5 ? 0 : 1};
  }
function UpdateName() {
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
  
    const handleSubmit = () => {
      startTransition(async () => {
        const res = await send(name);
        if (res.code !== 0) {
          setError(res.message);
        } else {
          setError(null);
        }
      })
    };
  
    return (
      <div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={handleSubmit} disabled={isPending} style={{ margin:10, backgroundColor: isPending ? 'gray' : 'green', color: 'white'}}>
          {isPending ?'loading':'Update'}
        </button>
        {error && <p>提交错误</p>}
      </div>
    );
  }
export default UpdateName