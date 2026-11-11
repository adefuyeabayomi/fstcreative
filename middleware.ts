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
  const accessToken =
    request.cookies.get("fst_pa_access")?.value ??
    // Legacy cookie from the pre-backend auth flow.
    request.cookies.get("access_token")?.value;
  // A refresh cookie is enough to let the page render. The AuthProvider will
  // exchange it for a new access cookie through the backend; API authorization
  // still requires a valid access JWT.
  const refreshToken = request.cookies.get("fst_pa_refresh")?.value;
  const hasSession = Boolean(accessToken || refreshToken);

  // Protect dashboard routes
  if (protectedRoutes.some((route) => path.startsWith(route)) && !hasSession) {
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
