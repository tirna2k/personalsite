const homePage = new URL("./index.html", import.meta.url);

export async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname !== "/") {
    return new Response("Not Found", { status: 404 });
  }

  const html = await Deno.readTextFile(homePage);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

if (import.meta.main) {
  Deno.serve({ port: 8000 }, handler);
}
