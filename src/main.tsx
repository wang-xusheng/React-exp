import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Count from './Count.tsx'
import Todos from './Todos.tsx'
import UpdateName from './Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Count></Count> */}
    {/* <Todos></Todos> */}
    {<UpdateName></UpdateName>}
  </StrictMode>,
)
