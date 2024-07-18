'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps{
    children: React.ReactNode
}

const Providers = ({children}: ProvidersProps) => {
    return (
        <SessionProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
  )
}

export default Providers