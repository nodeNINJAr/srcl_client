import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Routes/Router.jsx'
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'


const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
