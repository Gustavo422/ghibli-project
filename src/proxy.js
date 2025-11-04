import { auth } from "@/auth";
import { NextResponse } from "next/server";

const protectedRoutes = ["/films", "/forgot-password", "/"];

/**
 * @param {import('next/server').NextRequest} request
 */

export async function proxy(request) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/films/:path*"],
};
