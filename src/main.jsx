import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostListProvider from './Components/PostList-store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostListProvider>
    <App />
    </PostListProvider>
  </StrictMode>,
)
