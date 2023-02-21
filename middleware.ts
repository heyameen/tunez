import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(process.env.COOKIE_NAME);

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/", "/playlist", "/library"],
};
