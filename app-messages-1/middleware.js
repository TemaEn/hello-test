export function middleware(request) {
  if (request.nextUrl.pathname === "/api/message") {
    console.log(
      `[${process.env.APP_NAME} Middleware] Перехвачен запрос к API сообщений`
    );
  }
  return Response.next();
}
