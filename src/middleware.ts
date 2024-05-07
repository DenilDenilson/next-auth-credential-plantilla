/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { auth } from '@/auth'

export default auth(async (req) => {
  if (req.nextUrl.pathname === '/' && req.auth) {
    // '/' y estoy logueado
    console.log('redirecting to /dashboard')
    return Response.redirect(new URL('/dashboard', req.nextUrl.origin))
  }
  if (req.nextUrl.pathname === '/login' && req.auth) {
    // '/login' y estoy logueado
    console.log('redirecting to /dashboard')
    return Response.redirect(new URL('/dashboard', req.nextUrl.origin))
  }
  if (req.nextUrl.pathname === '/dashboard' && !req.auth) {
    // '/dashboard' y no estoy logueado
    console.log('redirecting to login')
    return Response.redirect(new URL('/api/auth/signin', req.nextUrl.origin))
  }
})
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
