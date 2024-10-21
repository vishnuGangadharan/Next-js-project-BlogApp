// import React from 'react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// const Providers = ({children}:{children: React.ReactNode}) => {

//     const queryClient = new QueryClient();
//   return (

//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   )
// }

// export default Providers

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const ReactQueryClientProvider =({children}:{children: React.ReactNode}) => (
  <QueryClientProvider client={queryClient}>
    {children}
    
  </QueryClientProvider>
)