import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // // Get the current session
    // const {
    //   data: { session },
    // } = await supabase.auth.getSession();
    // // Define protected routes
    // const protectedRoutes = [
    //   /^\/dashboard(\/.*)?$/,
    //   "/profile",
    //   /^\/proker(\/.*)?$/,
    // ];

    // const isProtectedRoute = protectedRoutes.some((route) => {
    //   if (typeof route === "string") {
    //     return request.nextUrl.pathname.startsWith(route);
    //   } else if (route instanceof RegExp) {
    //     return route.test(request.nextUrl.pathname);
    //   }
    //   return false;
    // });

    // // If no session and trying to access a protected route, redirect to login
    // if (!session && isProtectedRoute) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }

    // // If session exists and trying to access login/register, redirect to dashboard
    // if (session && ["/login", "/register"].includes(request.nextUrl.pathname)) {
    //   return NextResponse.redirect(new URL("/dashboard", request.url));
    // }
    

    // // If there's a session, fetch user data
    // if (session) {
    //   const { data: userData, error: userError } = await supabase
    //     .from("users")
    //     .select(`
    //       *,
    //       jabatan:jabatan_id(
    //         *,
    //         parent:parent_id(*)
    //       )
    //     `)
    //     .eq("id", session.user.id)
    //     .single();

    //   if (userError) {
    //     if (isProtectedRoute) {
    //       return NextResponse.redirect(new URL("/verify-admin", request.url));
    //     }
    //   }

    //   if (!userData) {
    //     if (request.nextUrl.pathname !== "/401") {
    //       return NextResponse.redirect(new URL("/401", request.url));
    //     }
    //   }

    //   console.log("User data:", userData);
    //   // Check verification status
    //   if (!userData.isVerified) {
    //     // Allow access to verification page and static files
    //     if (request.nextUrl.pathname.startsWith('/verify-email') || 
    //         request.nextUrl.pathname.startsWith('/_next/') ||
    //         request.nextUrl.pathname.startsWith('/assets/')) {
    //       return response;
    //     }
        
    //     // Redirect unverified users trying to access protected routes
    //     if (isProtectedRoute) {
    //       return NextResponse.redirect(new URL("/verify-admin", request.url));
    //     }
    //   }
    // }

    return response;
  } catch (error) {
    console.error("Error in updateSession:", error);
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};