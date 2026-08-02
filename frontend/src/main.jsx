import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider
        client={queryClient}
    >

        <AuthProvider>

            <App/>

            <Toaster richColors />
        </AuthProvider>

    </QueryClientProvider>
  </StrictMode>
);
