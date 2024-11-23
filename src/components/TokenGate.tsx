// src/components/TokenGate.tsx

import React from 'react';

interface TokenGateProps {
  children: React.ReactNode;
  searchParams: URLSearchParams; // Use URLSearchParams directly
}

export function TokenGate({ children, searchParams }: TokenGateProps) {
  const token = searchParams.get('token'); // Extract token from URLSearchParams

  if (!token && process.env.COPILOT_ENV !== 'local') {
    throw new Error(
      'Session Token is required, guide available at: https://docs.copilot.com/docs/custom-apps-setting-up-the-sdk#session-tokens',
    );
  }

  return <>{children}</>;
}