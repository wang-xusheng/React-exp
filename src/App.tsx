import {  useOptimistic, useState } from 'react';
 
type Message = {
  message: string;  // 消息内容
  sending: boolean; // 是否正在发送
  code?: number;    // 发送状态码
};
async function send(message:string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {message, sending: false, code: Math.random() > 0.5 ? 0 : 1};
}

const App = ()=>{
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(
    messages,
    (state, newMessage) => [...state, { message: newMessage, sending: true }],
  );
  return (
    <div>
    {optimisticMessages.map((m,i) => (
      <div key={i} style={{color: (m.code&&m.code !== 0) ? 'red' : 'black'}}>
        {m.message}
        {m.sending ? 'Sending...' : ''}
        {(m.code && m.code !== 0) ? '发送失败':''}
      </div>
    ))}
    <form
      action={async (formData) => {
        const message = formData.get('message');
        addOptimisticMessage(message as string);
        const res = await send(message as string);
        setMessages((messages) => [...messages, res]);
      }}
    >
      <input type="text" name="message" />
    </form>
  </div>)
}
export default App