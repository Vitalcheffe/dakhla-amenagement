import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Skip middleware for root path — it's handled by src/app/page.tsx directly
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  const response = intlMiddleware(request);

  // Convert 307 (temporary) redirects to 301 (permanent) for SEO
  if (response.status === 307) {
    const location = response.headers.get('location');
    if (location) {
      const headers = new Headers(response.headers);
      headers.set('cache-control', 'public, max-age=31536000, immutable');
      return NextResponse.redirect(new URL(location, request.url), {
        status: 301,
        headers,
      });
    }
  }

  return response;
}

export const config = {
  matcher: ['/', '/(fr|en|ar)/:path*'],
};
