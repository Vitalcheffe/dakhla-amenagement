import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Root path — served directly by src/app/page.tsx
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Redirect ONLY /fr (exact) → / to avoid duplicate home page
  // But keep /fr/produits, /fr/blog, etc. (they need the /fr prefix)
  if (pathname === '/fr' || pathname === '/fr/') {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = '/';
    return NextResponse.redirect(newUrl, {
      status: 301,
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    });
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
