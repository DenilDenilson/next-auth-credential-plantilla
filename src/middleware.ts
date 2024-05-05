/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { auth } from '@/auth'

export default auth(async (req) => {
  if (req.nextUrl.pathname === '/') {
    // ruta pública
  } else {
    // ruta privada
    if (!req.auth) {
      // No estoy logueado
      const newUrl = new URL('/api/auth/signin', req.nextUrl.origin)
      console.log('redirigiendo a: ', newUrl.toString())
      return Response.redirect(newUrl.toString())
    }
    // if (req.auth?.expires !== undefined) {
    //   // Estoy logueado
    //   if (Math.floor(Date.now() / 1000) > parseInt(req.auth?.expires)) {
    //     // La sesión ha expirado
    //     console.log(Date.now(), parseInt(req.auth?.expires))
    //     console.log('sesión expirada')
    //     return Response.redirect(new URL('/api/signout', req.nextUrl.origin).toString())
    //   }
    // }
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
