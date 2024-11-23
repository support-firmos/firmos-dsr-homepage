// src/app/page.tsx

"use client";

import { TokenGate } from '@/components/TokenGate';
import Footer from '@/components/Footer';
import { LandingPage } from '@/components/landing-page';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Page Component
export default function Page() {
  const searchParams = useSearchParams();

  return (
    <TokenGate searchParams={searchParams}>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <h1
            className="
              absolute 
              top-5 
              left-5 
              z-[9999] 
              bg-[#14151A] 
              text-white 
              p-2.5 
              rounded-md 
              text-lg 
              font-sans 
              shadow-md 
              w-auto
            "
          >
            Welcome! <code>{searchParams.get('token') || 'Guest'}</code>
          </h1>
          <LandingPage />
          <Footer />
        </main>
      </Suspense>
    </TokenGate>
  );
}