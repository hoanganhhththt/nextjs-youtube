import { NextResponse } from "next/server";

export function middleware(req) {
  // if(req.nextUrl.pathname !== '/login') {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }
  // return NextResponse.json({ result: 'successfully ran' })
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ["/userlist/:path*"],
};