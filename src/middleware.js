import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const token = request.cookies.get("token")?.value

    if(request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/user"){
        return
    }

    const existsUser = 
    request.nextUrl.pathname === "/login" || 
    request.nextUrl.pathname == "/signup" 

    if(existsUser){
        if(token){
            return NextResponse.redirect(new URL("/profile/user", request.url))
        }
    }else{
        if(!token){

            if(request.nextUrl.pathname.startsWith("/api")){
                return NextResponse.json({
                    message: "Unauthorized",
                    success:false
                },{status:404})
            }


            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/:path*","/signup", "/login", "/profile/:path*", "/add-task", "/show-task" ]
}







