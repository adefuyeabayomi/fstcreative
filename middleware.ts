import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/projects-and-activities",
  "/dashboard/design-school",
  "/dashboard/notifications",
  "/dashboard/transactions",
  "/dashboard/customer-support",
  "/dashboard/account-settings",
  "/chat",
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token =
    request.cookies.get("fst_pa_access")?.value ??
    // Legacy cookie from the pre-backend auth flow.
    request.cookies.get("access_token")?.value;
  const isLoggedIn = !!token;

  // Protect dashboard routes
  if (protectedRoutes.some((route) => path.startsWith(route)) && !isLoggedIn) {
    const loginUrl = new URL("/login", request.nextUrl.origin);
    loginUrl.searchParams.set(
      "callbackUrl",
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)",
  ],
};
