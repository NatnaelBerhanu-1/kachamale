"use server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./actions/verifyToken";

export async function middleware(request: NextRequest) {
  const session: string = request.cookies.get("Et_car_Token")?.value || "";

  const publicRoutes = ["/", "/si/:path*", "/search", "/search/:path*"];
  const protectedRoutes = ["/ad/:path*", "/profile"];
  const authRoutes = ["/register", "/signin"];
  const currentPath = request.nextUrl.pathname;

  if (session && authRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!session && protectedRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
