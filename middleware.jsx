import { NextResponse } from "next/server";

export function middleware(request) {
  const authTokens = request.cookies.get("token");

  if (
    request.nextUrl.pathname.startsWith("/calculator") ||
    request.nextUrl.pathname.startsWith("/diary") ||
    request.nextUrl.pathname.startsWith("/new-product")
  ) {
    if (authTokens === undefined) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/new-account")
  ) {
    if (authTokens !== undefined) {
      return NextResponse.redirect(new URL("/calculator", request.nextUrl));
    }
  }
  return NextResponse.next();
  //   // si no inicio sesion y quiere ir a calculator, diary o new-product lo redirige a home
}
