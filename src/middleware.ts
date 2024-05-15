import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";
  console.log("Path:", path);
  console.log("Token:", token);

  // if we are logged in means we have token then we cant visit signup or login from url if we try then redirect us to "/" i.e home page
  if (isPublicPath && token) {
    console.log("Redirecting to /");
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  // if we are not logged in means we dont have token and we want to access other than sign up and login i.e profile then redirect to login
  if (!isPublicPath && !token) {
    console.log("Redirecting to /login1");
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
//   // If trying to access /profile/:path without being logged in, redirect to login
//   if (path.startsWith("/profile/") && !token) {
//     console.log("Redirecting to /login");
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }
//   // If logged in and trying to access /profile/:path, allow access
//   if (path.startsWith("/profile/") && token) {
//     console.log("Allowing access to /profile/:path");
//     return NextResponse.next();
//   }

 
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/login", "/signup","/profile/:path*"],
};
