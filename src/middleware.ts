// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// Helper function to generate a simple nonce
function generateNonce() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function middleware(request: NextRequest) {
  // Skip CSP in development mode for easier debugging
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Generate a nonce using Math.random (works with Edge Runtime)
  const nonce = generateNonce();

  // Define CSP policy with nonce and frame-ancestors for external content
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' https://www.youtube.com https://youtube.com;
    frame-ancestors https://dashboard.copilot.com/ https://*.copilot.app/ https://app.firmos.ai https://*.firmos.ai;
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Set headers for the request
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Create response with updated CSP headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}
