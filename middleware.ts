import { auth } from "./auth";
import { NextRequest } from "next/server";

// Manual type definition for the authenticated request
interface AuthenticatedRequest extends NextRequest {
  auth: {
    user?: {
      id: string;
      name: string;
    };
  } | null;
}

export default auth(async (req) => {
  const request = req as AuthenticatedRequest;
  const { nextUrl } = request;

  const isLoggedIn = !!request.auth?.user;
  const isLoginPage = nextUrl.pathname.startsWith("/admin/login");
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute && !isLoginPage && !isLoggedIn) {
    return Response.redirect(new URL("/admin/login", nextUrl));
  }

});
