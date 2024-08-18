"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
export  const provider = ({ children }) => {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [queryClient] = useState(() => new QueryClient())
 return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
 )
}